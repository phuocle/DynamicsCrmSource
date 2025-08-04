<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Sfa.StatusMessagePage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<html xmlns:crm>
<head>
<title>
<loc:text resourceid="Web.SFA.Workflow.StopWorkflowStatusDialogTitle" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">
Sys.Application.add_load(PageOnLoad);
function PageOnLoad() {
var crmForm = $get("crmForm");
crmForm.style.height = '100%';
var crmFormCtrl = $find("crmForm");
crmFormCtrl.detachCloseAlert();
crmFormCtrl.add_onSave(saveAndClose);
attachWindowOnBeforeUnload(OnClose);
attachWindowOnUnload(OnPageUnload);

var readOnlyForm = GetValueForTag('readonlymode=');
if (readOnlyForm == 'true') {
SetReadOnlyForm(true);
}

GenerateAttributeTypeMapping("workflow", null, null, true);
AddAttributeTypeMapping("ParameterValue0", "String");
$addHandler($get('ParameterValue0'), "focus", OnAttributeFocus);
$addHandler($get('ShowHideImage'), "click", ToggleGridWidth);
$addHandler(document, 'keydown', OnKeyDown);

PopulateSlugControls(CrmEncodeDecode.CrmXmlDecode($get('hidSlugInfo').value));
}

function ToggleGridWidth() {
var gridContainer = $get("gridContainer");
if (LOCID_UI_DIR === "RTL")
if (gridContainer.style.left == "208px" || gridContainer.style.left == "")
gridContainer.style.left = "27px";
else
gridContainer.style.left = "208px";
else
if (gridContainer.style.right == "208px" || gridContainer.style.right == "")
gridContainer.style.right = "27px";
else
gridContainer.style.right = "208px";
}

function saveAndClose(rawEvent) {
var e = new Sys.UI.DomEvent(rawEvent);
e.preventDefault();

$find("crmForm").set_bypassValidation(true);
SaveAndCloseCustomStepConfiguration();
}

function OnClose(oEvent) {
oEvent = oEvent.rawEvent;

if ($find("crmForm").get_bypassValidation() || CheckParameters()) {
return;
}

oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
return LOCID_FORMS_SAVE_CONFIRM_TITLE;
}

function OnPageUnload() {
$removeHandler(document, 'keydown', OnKeyDown);
$removeHandler($get('ShowHideImage'), "click", ToggleGridWidth);
$removeHandler($get('ParameterValue0'), "focus", OnAttributeFocus);
}

function OnKeyDown(eventObj) {
if (eventObj.keyCode == KEY_F) {
if (eventObj.ctrlKey && eventObj.shiftKey) {
ToggleGridWidth();
}
}
}

</script>
</head>
<body>
<div class="ms-crm-Form-Layout">
<div>
<mnu:appgenericmenubar id="crmMenuBar" runat="server" />
</div>
<div class="ms-crm-Form-Background">
<div id="areaForm">
<div id="gridContainer" class="gridContainer-WFStopMessage">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:appgrid id="crmGrid" runat="server" name="crmGrid" supressfetch="true" />
</div>
</div>
<div class="ms-crm-Form-Area-WFStopMessage">
<frm:statusmessageform id="crmForm" runat="server">
</frm:statusmessageform>
</div>
</div>
</div>
</div>
<input type="hidden" id="hidSlugInfo" value="<%=SlugInfo%>" />
</body>
</html>
