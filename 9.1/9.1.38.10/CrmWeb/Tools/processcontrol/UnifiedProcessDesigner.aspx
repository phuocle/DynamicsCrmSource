<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.ProcessControl.ProcessDesignerV1" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html>
<cnt:AppHeader runat="server" id="crmHeader" />
<head>
<link rel="shortcut icon" href="/pa_favicon.ico" />
<script type="text/javascript">

var context = [];


function onWindowErrorEventHandler(e) {
var errorMsg = e.message || "An error occurred when loading Business Process Flow designer";


if (e.error) {
errorMsg = (e.error.message || errorMsg).concat(e.error.stack);
}

MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerLaunchEvent(context,
0 , errorMsg, "1" );

if (window.parent.postMessage && !isNullOrEmpty(window["IFRAME_REQUEST_ORIGIN"])) {
window.parent.postMessage({ eventName: "BPFEditor_Load_Failure", error: errorMsg }, window["IFRAME_REQUEST_ORIGIN"]);
}
}


function preInit() {
try {
context["preInitialization"] = [];
window["IFRAME_REQUEST_ORIGIN"] = $('#Origin').val();
MscrmControls.ProcessDesigner.ProcessDesignerControl.prototype.preInit();


window.addEventListener('error', onWindowErrorEventHandler);
} catch (ex) {

context['preInitialization']['error'] = "PreInitialization Error: " + ex;
}
}

preInit();

$(document).ready(function () {
try {


window.removeEventListener('error', onWindowErrorEventHandler);

Sys.Application.add_init(SysInit);

var ProcessUniqueNameLink = $("#ProcessUniqueNameLink");
ProcessUniqueNameLink.on("click", function () {
MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerBPFEntitylinkClickedEvent();
ProcessControl.Configuration.BPFClientProxy.getEntityMetadata(this.text, loadBPFEntity);
});


if (!!$('#Origin').val()) {
var powerAppBarHeight = $("#bpfConfContent").css('top');
document.documentElement.style.setProperty('--powerAppsBarHeight', powerAppBarHeight);

document.getElementById("powerAppsNavBarDiv").style.display = "none";
document.getElementById("bpfConfContent").style.top = "0px";
document.getElementById("bpfConfContent").style.height = "100vh";
} else {
document.getElementById("backFontIconContainer").style.display = "none";
}

try {
if (window.parent.postMessage && !isNullOrEmpty(window["IFRAME_REQUEST_ORIGIN"])) {
window.parent.postMessage({ eventName: 'BPFEditor_Load_Success' }, window["IFRAME_REQUEST_ORIGIN"]);
}
} catch (ex) {

MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerLaunchEvent(context,
0 , ex.message, "1" );
}
} catch (error) {
MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerLaunchEvent(context,
0 , error.message, "1" );
throw error;
}
});

function SysInit() {
var closeButton = $("#_MBfindcrmFormCloseRecord");
if (closeButton.length > 0) {
$(closeButton).remove();
}
context["parameters"] = [];
context["parameters"]["ProcessData"] = [];
context["parameters"]["ProcessData"]["raw"] = window["clientdata"];

context["parameters"]["Category"] = [];
context["parameters"]["StateCode"] = [];
context["parameters"]["StatusCode"] = [];

context["client"] = [];
context["client"]["formFactor"] = window.Xrm.Page.context.client.getFormFactor();
context["client"]["languageCode"] = window.Xrm.Page.context.getUserLcid();
context["client"]["locale"] = window.navigator.language;
context["client"]["userAgent"] = [];

context["internal"] = [];
context["internal"]["userId"] = window.Xrm.Page.context.getUserId();;
context["internal"]["userRoles"] = window.Xrm.Page.context.getUserRoles();
context["internal"]["organizationId"] = window["organizationId"];
context["internal"]["isFeatureEnabled"] = window["IsActionSupportFeatureEnabled"];
context["internal"]["isBPFApprovalFlowsEnabled"] = window["IsBPFApprovalFlowsEnabled"];
context["internal"]["isBPFApprovalFlowsAsRequiredStepEnabled"] = window["IsBPFApprovalFlowsAsRequiredStepEnabled"];
context["internal"]["origin"] = window["launchPoint"] = window["IFRAME_REQUEST_ORIGIN"] = $('#Origin').val();

window["parentContainer"] = "DesignerArea";
context["resources"] = [];
context["resources"]["getAttributeListMetadata"] = function (entityName, callbcak) {
var deferred = Mscrm.BusinessRules.BusinessRuleEntityManager.get_instance().requestAttributes(entityName);
deferred.done(function (result) {
callbcak(result.Fields);
});
};
context["resources"]["getStepAttributeListMetadata"] = function (entityName, callback) {
return ProcessControl.Configuration.BPFClientProxy.getStepAttributeListMetadata(entityName, callback);
};
context["resources"]["getSystemControlAttributeMetadataModel"] = function (entityName) {
return ProcessControl.Configuration.BPFClientProxy.getSystemControlAttributeMetadataModel(entityName);
};
context["resources"]["getAttributePickListMetadata"] = function (entityName, attributeName, callbcak) {
var deferred = Mscrm.BusinessRules.BusinessRuleEntityManager.get_instance().requestAttributes(entityName);
deferred.done(function (result) {
var fields = result.Fields;
for (var i = 0; i < fields.length; i++) {
var field = fields[i];
if (field.LogicalName == attributeName) {
callbcak(field.AdditionalMetadata.Options);
return;
}
}
callbcak(null);
});
};
context["resources"]["getEntityListMetadata"] = function (callback) {
return ProcessControl.Configuration.BPFClientProxy.getEntityListMetadata(callback);
};
context["resources"]["getEntityMetadata"] = function (entityName, callback) {
return ProcessControl.Configuration.BPFClientProxy.getEntityMetadata(entityName, callback);
};
context["resources"]["getRelationshipMetadata"] = function (entityName, callback) {
return ProcessControl.Configuration.BPFClientProxy.getEntityAndRelationshipMetadata(entityName, callback);
};
context["resources"]["getLoadedRelationshipEntityMetadata"] = function () {
return ProcessControl.Configuration.BPFClientProxy.getLoadedRelationshipEntityMetadata();
};
context["resources"]["getString"] = function (stringToGet) {
if (window[stringToGet] !== null && window[stringToGet] !== undefined && typeof window[stringToGet] === "string") {
return window[stringToGet];
}
else {
return stringToGet;
}
};
context["resources"]["ValidateXmlAgainstXsd"] = null;
context["resources"]["formId"] = ProcessControl.Configuration.BPFClientProxy.getFormId();
context["resources"]["getStageCategoryMetadata"] = function () {
return ProcessControl.Configuration.BPFClientProxy.getStageCategoryMetadata();
}
initialize();


if (this.isTaskFlow) {
MscrmControls.ProcessDesigner.TBXDesignerControl.prototype.initCore(context);
}
else {
MscrmControls.ProcessDesigner.ProcessDesignerControl.prototype.initCore(context);
}
$("#ConfiguratorArea").hide();
}

function initialize() {
ProcessConfiguration.Behavior.ExpandCollapseBehavior.setBehavior();
ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler();
ProcessControl.Configuration.BPFClientProxy.initializeClientProxy();
}

function loadBPFEntity(entityMetadata) {
var defaultSolutionId = "<%=SolutionConstants.DefaultSolutionId.ToString("D")%>";
var windowUrl = Mscrm.CrmUri.create("/tools/systemcustomization/entities/manageentity.aspx?appSolutionId=%7B" + defaultSolutionId + "%7D&id=%7b" + entityMetadata.EntityMetadataId + "%7d");
windowUrl = Mscrm.CrmUri.updateCrmUriHostAndScheme(windowUrl);
var width = "1000";
var height = "500";
var left = (window.screen.availWidth - width) / 2;
var top = (window.screen.availHeight - height) / 2;
var features = "resizable=1,left=" + left + ",top=" + top;
var entityWindow = openStdWin(windowUrl, "", width, height, features);
}

function loadStandAloneEntity(entityName) {
ProcessControl.Configuration.BPFClientProxy.getEntityMetadata(entityName, function (entityMetadata) { openStandAloneEntity(entityMetadata, entityName) });
}

function openStandAloneEntity(entityMetadata, entityName) {
var defaultSolutionId = "<%=SolutionConstants.DefaultSolutionId.ToString("D")%>";
var windowUrl = Mscrm.CrmUri.create("/tools/systemcustomization/entities/manageentity.aspx?appSolutionId=%7B" + defaultSolutionId + "%7D&id=%7b" + entityMetadata.EntityMetadataId + "%7d");
windowUrl = Mscrm.CrmUri.updateCrmUriHostAndScheme(windowUrl);

if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EnableStandAloneBPFEntities)
&& !Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EnableStandAloneBPFEntitityLegacyPage)) {
var portalUrl = $('#EntityLinkUrl').val();
if (!(typeof POWERAPPS_ENVIRONMENT_ID === 'undefined') && !isNullOrEmpty(portalUrl)) {
var newEntityPageUrl = portalUrl + "/environments/"
+ POWERAPPS_ENVIRONMENT_ID + "/solutions/" + defaultSolutionId + "/entities/" + POWERAPPS_ENVIRONMENT_ID + "/" + entityName;
window.open(newEntityPageUrl);
return;
}
}

var width = "1000";
var height = "500";
var left = (window.screen.availWidth - width) / 2;
var top = (window.screen.availHeight - height) / 2;
var features = "resizable=1,left=" + left + ",top=" + top;
var entityWindow = openStdWin(windowUrl, "", width, height, features);
}

function isNullOrEmpty(val) {
return !val || val.trim() === '';
}
</script>
</head>
<body>
<div id="powerAppsNavBarDiv">
<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server"/>
</div>
<input type="hidden" id="Origin" runat="server" value=null/>
<input type="hidden" id="EntityLinkUrl" runat="server" value=null/>
<div id="processConfig" class="bpfConfForm">
<div id="bpfConfContent" class="bpfConfContent">
<div id="header">
<div class="bottomheader">
<div class="processname">
<div id="backFontIconContainer" tabindex="0" class="expandCollapseContainer" onclick="window.history.back();">
<span class="CCFSymbolFont backFontIcon bpfConfExpandCollapseImg" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Designer.Navigation.BackButton")) %>" aria-label="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Designer.Navigation.BackButton")) %>"></span>
</div>
<div id="ProcessTitle" runat="server">
</div>
<div id="expandContainer" tabindex="0" class="expandCollapseContainer" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Expand")) %>" aria-label="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Expand")) %>">
<span class="CCFSymbolFont expandFontIcon bpfConfExpandCollapseImg" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Expand")) %> - <%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessDesignerControl_BPF_ScreenReader_GlobalArea_DetailsTooltip")) %>"></span>
</div>
<div id="collapseContainer" tabindex="0" class="expandCollapseContainer" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Collapse")) %>" aria-label="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Collapse")) %>">
<span class="CCFSymbolFont collapseFontIcon bpfConfExpandCollapseImg" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Collapse")) %> -  <%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessDesignerControl_BPF_ScreenReader_GlobalArea_DetailsTooltip")) %>"></span>
</div>
</div>
<div class="processmenu">
<mnu:AppFormMenuBar ID="crmMenuBar" runat="server"></mnu:AppFormMenuBar>
</div>
</div>
<h3 class="bpfh3">
<div id="SolutionTitle" runat="server">
</div>
</h3>
</div>
<div id="processDetailArea" class="confDetailArea confProcessDetailsArea">
<div id="leftArea" class="configuratorDetailsDiv">
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessName_Label")) %>"
for="ProcessName" class="ms-crm-InlineEditLabel confLabel">
<loc:Text ResourceId="ProcessName_Label" class="msc-crm-InlineEditLabel" runat="server" />
</label>
<img title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>"
src="/_imgs/frm_required.gif" class="bpfConfReq" />
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl ID="ProcessName" MaxLength="100" runat="server" />
</div>
</div>
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessOwnerLabel")) %>"
for="ProcessOwner" class="ms-crm-InlineEditLabel confLabel" id="lbl_ProcessOwner">
<loc:Text ResourceId="ProcessControl.Configurator.ProcessOwnerLabel" class="msc-crm-InlineEditLabel"
runat="server" />
</label>
<img title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>"
src="/_imgs/frm_required.gif" class="bpfConfReq" />
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl ID="ProcessOwner" class="bpfConfInput" MaxLength="100" runat="server" disabled="disabled" />
</div>
</div>
<div class="configuratorControlsDiv" id="ProcessUniqueNameDiv" runat="server">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessUniqueNameLabel")) %>"
for="ProcessUniqueName" class="ms-crm-InlineEditLabel confLabel" id="lbl_ProcessUniqueName">
<loc:Text ResourceId="ProcessControl.Configurator.ProcessUniqueNameLabel" class="msc-crm-InlineEditLabel"
runat="server" />
</label>
<img title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>"
alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>"
src="/_imgs/frm_required.gif" class="bpfConfReq" />
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl ID="ProcessUniqueName" class="bpfConfInput" MaxLength="100" runat="server" disabled="disabled" />
<a href="#" id="ProcessUniqueNameLink" runat="server" class="bpf_link headline2 ellipsis"></a>
</div>
</div>
</div>
<div class="bpfConfDetailSpacer">
</div>
<div id="rightArea" class="configuratorDetailsDiv">
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Web.SFA.Workflow.PrimaryEntityLabel")) %>"
for="PrimaryEntity" class="ms-crm-InlineEditLabel confLabel" id="lbl_PrimaryEntity">
<loc:Text ResourceId="Web.SFA.Workflow.PrimaryEntityLabel" class="msc-crm-InlineEditLabel"
runat="server" />
</label>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl ID="PrimaryEntity" class="bpfConfInput" MaxLength="50" runat="server"
contenteditable="false" disabled="disabled" donotsubmit="1" />
</div>
</div>
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Category_Label")) %>"
for="Category" class="ms-crm-InlineEditLabel confLabel" id="lbl_Category">
<loc:Text ResourceId="Category_Label" class="msc-crm-InlineEditLabel" runat="server" />
</label>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl ID="Category" class="bpfConfInput" MaxLength="50" runat="server"
contenteditable="false" disabled="disabled" donotsubmit="1" />
</div>
</div>
<div class="configuratorControlsDiv processImageDiv" id="ProcessImageDiv" runat="server">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessImageLabel")) %>"
for="Image" class="ms-crm-InlineEditLabel confLabel">
<loc:Text ResourceId="ProcessControl.Configurator.ProcessImageLabel" class="msc-crm-InlineEditLabel"
runat="server" />
</label>
</div>
<div class="bpfConfLabelDiv">
<a href="#" class="setImageLink bpfConfTitle" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessSetImageLinkLabel")) %>">
<loc:Text ResourceId="ProcessControl.Configurator.ProcessSetImageLinkLabel" class="msc-crm-InlineEditLabel"
runat="server" />
</a>
</div>
</div>
</div>
<div class="configuratorDescriptionDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Description_Label")) %>"
for="Description" class="ms-crm-InlineEditLabel confDescriptionLabel">
<loc:Text ResourceId="Description_Label" class="msc-crm-InlineEditLabel" runat="server" />
</label>
</div>
<div class="ms-crm-Inline-Edit configuratorTextAreaDiv">
<sdk:TextAreaControl ID="Description" class="confDescriptionInput" rows="5" cols="40"
MaxLength="2000" runat="server" />
</div>
</div>
<div class="clear">
</div>
</div>
<hr class="divider">
<div id="process_configurator_container" class="ui-dialog-content">
<div id="ConfiguratorArea" runat="server">
</div>
<div id="DesignerArea" class="Section_value_common">
</div>
</div>
</div>
<div id="bpfConfFooter" class="bpfConfFooter">
<div id='pcc_updown_arrows' class='pcc_updown_div'>
</div>
<div class="bpfStatusArea">
<div id="StatusLabel" class="bpfConfLabel" runat="server">
</div>
<div id="ConfiguratorStatus" class="bpfConfStatus" runat="server">
</div>
</div>
</div>
<div id='headerIdAppFormMenuBar'>
</div>
<frm:HardCodedForm ID="crmForm" runat="server">
</frm:HardCodedForm>
</div>
</body>
</html>
