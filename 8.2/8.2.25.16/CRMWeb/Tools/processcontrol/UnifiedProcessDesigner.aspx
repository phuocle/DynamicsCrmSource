<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ProcessControl.ProcessDesignerV1"   %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html>
<cnt:AppHeader runat="server" id="crmHeader"/>
<head>
<script type="text/javascript">
$(document).ready(function() {
Sys.Application.add_init(SysInit);
});

function SysInit() {
var closeButton = $("#_MBfindcrmFormCloseRecord");
if (closeButton.length > 0) {
$(closeButton).remove();
}
var context = [];
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

window["parentContainer"] = "DesignerArea";
context["resources"] = [];
context["resources"]["getAttributeListMetadata"] = function (entityName, callbcak) {
var deferred = Mscrm.BusinessRules.BusinessRuleEntityManager.get_instance().requestAttributes(entityName);
deferred.done(function(result) {
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
context["resources"]["getRelationshipMetadata"] = function (entityName, callback) {
return ProcessControl.Configuration.BPFClientProxy.getEntityAndRelationshipMetadata(entityName, callback);
};
context["resources"]["getLoadedRelationshipEntityMetadata"] = function () {
return ProcessControl.Configuration.BPFClientProxy.getLoadedRelationshipEntityMetadata();
};
context["resources"]["getString"] = function (stringToGet) {
if (window[stringToGet] !== null && window[stringToGet] !== undefined) {
return window[stringToGet];
}
else {
return stringToGet;
}
};
context["resources"]["ValidateXmlAgainstXsd"] = null;
context["resources"]["formId"] = ProcessControl.Configuration.BPFClientProxy.getFormId();
context["resources"]["getStageCategoryMetadata"] = function() {
return ProcessControl.Configuration.BPFClientProxy.getStageCategoryMetadata();
}
initialize();


if (this.isTaskFlow)
{
MscrmControls.ProcessDesigner.TBXDesignerControl.prototype.initCore(context);
}
else
{
MscrmControls.ProcessDesigner.ProcessDesignerControl.prototype.initCore(context);
}
$("#ConfiguratorArea").hide();
}

function initialize() {
ProcessConfiguration.Behavior.ExpandCollapseBehavior.setBehavior();
ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler();
ProcessControl.Configuration.BPFClientProxy.initializeClientProxy();
}
</script>
</head>
<body>
<div id="processConfig" class="bpfConfForm">
<div id="bpfConfContent" class="bpfConfContent">
<mnu:appformmenubar id="crmMenuBar" runat="server"></mnu:appformmenubar>
<div id="header">
<h2 class="bpfh2"><div id="BusinessProcessType" class="wfBusinessProcessType" runat="server"></div></h2>
<h1 class="bpfh1"><div id="ProcessTitle" runat="server"></div></h1>
<div id="expandContainer" tabindex="0" class="expandCollapseContainer" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Expand")) %>">
<label for="expandImg" class="ms-crm-InlineEditLabel bpfexpandCollapse"><loc:Text ResourceId="ProcessControl.Configurator.Details" class="msc-crm-InlineEditLabel" runat="server"/></label>
<img id="expandImg" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Expand")) %>"  alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Expand")) %>" src="/_imgs/ProcessControl/10_collapsed.png" class="bpfConfExpandCollapseImg"/>
</div>
<div id="collapseContainer" tabindex="0" class="expandCollapseContainer" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Collapse")) %>">
<label for="collapseImg" class="ms-crm-InlineEditLabel bpfexpandCollapse"><loc:Text ResourceId="ProcessControl.Configurator.Details" class="msc-crm-InlineEditLabel" runat="server"/></label>
<img id="collapseImg" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Collapse")) %>" alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.Collapse")) %>" src="/_imgs/ProcessControl/10_expanded.png" class="bpfConfExpandCollapseImg"/>
</div>
<h3 class="bpfh3"><div id="SolutionTitle" runat="server"></div></h3>
</div>
<div id="processDetailArea" class="confDetailArea confProcessDetailsArea">
<div id="leftArea" class="configuratorDetailsDiv">
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessName_Label")) %>" for="ProcessName" class="ms-crm-InlineEditLabel confLabel"><loc:Text ResourceId="ProcessName_Label" class="msc-crm-InlineEditLabel" runat="server"/></label>
<img title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>" alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>" src="/_imgs/frm_required.gif" class="bpfConfReq"/>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl id="ProcessName" MaxLength="100" runat="server"/>
</div>
</div>
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessOwnerLabel")) %>" for="ProcessOwner" class="ms-crm-InlineEditLabel confLabel"><loc:Text ResourceId="ProcessControl.Configurator.ProcessOwnerLabel" class="msc-crm-InlineEditLabel" runat="server"/></label>
<img title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>" alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>" src="/_imgs/frm_required.gif" class="bpfConfReq"/>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl id="ProcessOwner" class="bpfConfInput" MaxLength="100" runat="server" disabled="disabled"/>
</div>
</div>
<div class="configuratorControlsDiv" id="ProcessUniqueNameDiv" runat="server">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessUniqueNameLabel")) %>" for="ProcessUniqueName" class="ms-crm-InlineEditLabel confLabel"><loc:Text ResourceId="ProcessControl.Configurator.ProcessUniqueNameLabel" class="msc-crm-InlineEditLabel" runat="server"/></label>
<img title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>" alt="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Forms.Required.AltTag")) %>" src="/_imgs/frm_required.gif" class="bpfConfReq"/>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl id="ProcessUniqueName" class="bpfConfInput" MaxLength="100" runat="server" disabled="disabled"/>
</div>
</div>
</div>
<div class="bpfConfDetailSpacer"></div>
<div id="rightArea" class="configuratorDetailsDiv">
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Web.SFA.Workflow.PrimaryEntityLabel")) %>" for="PrimaryEntity" class="ms-crm-InlineEditLabel confLabel"><loc:Text ResourceId="Web.SFA.Workflow.PrimaryEntityLabel" class="msc-crm-InlineEditLabel" runat="server"/></label>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl id="PrimaryEntity" class="bpfConfInput" MaxLength="50" runat="server" contenteditable="false" disabled="disabled" donotsubmit="1"/>
</div>
</div>
<div class="configuratorControlsDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Category_Label")) %>" for="Category" class="ms-crm-InlineEditLabel confLabel"><loc:Text ResourceId="Category_Label" class="msc-crm-InlineEditLabel" runat="server"/></label>
</div>
<div class="ms-crm-Inline-Edit confInput">
<sdk:TextBoxControl id="Category" class="bpfConfInput" MaxLength="50" runat="server" contenteditable="false" disabled="disabled" donotsubmit="1"/>
</div>
</div>
<div class="configuratorControlsDiv processImageDiv" id="ProcessImageDiv" runat="server">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessImageLabel")) %>" for="Image" class="ms-crm-InlineEditLabel confLabel"><loc:Text ResourceId="ProcessControl.Configurator.ProcessImageLabel" class="msc-crm-InlineEditLabel" runat="server"/></label>
</div>
<div class="bpfConfLabelDiv">
<a href="#" class="setImageLink bpfConfTitle" title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("ProcessControl.Configurator.ProcessSetImageLinkLabel")) %>"><loc:Text ResourceId="ProcessControl.Configurator.ProcessSetImageLinkLabel" class="msc-crm-InlineEditLabel" runat="server"/></a>
</div>
</div>
</div>
<div class="configuratorDescriptionDiv">
<div class="bpfConfLabelDiv">
<label title="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Description_Label")) %>" for="Description" class="ms-crm-InlineEditLabel confDescriptionLabel"><loc:Text ResourceId="Description_Label" class="msc-crm-InlineEditLabel" runat="server"/></label>
</div>
<div class="ms-crm-Inline-Edit configuratorTextAreaDiv">
<sdk:TextAreaControl id="Description" class="confDescriptionInput" rows="5" cols="40" MaxLength="2000" runat="server"/>
</div>
</div>
<div class="clear"></div>
</div>
<br />
<div id="process_configurator_container" class="ui-dialog-content">
<div id="ConfiguratorArea" runat="server">
</div>
<div id="DesignerArea" class="Section_value_common">
</div>
</div>
</div>
<div id="bpfConfFooter" class="bpfConfFooter">
<div id='pcc_updown_arrows' class = 'pcc_updown_div'></div>
<div class="bpfStatusArea">
<div id="StatusLabel" class = "bpfConfLabel" runat="server"></div>
<div id="ConfiguratorStatus" class="bpfConfStatus" runat="server"></div>
</div>
</div>

<div id ='headerIdAppFormMenuBar'></div>
<frm:HardcodedForm id="crmForm" runat="server">
</frm:HardcodedForm>
</div>
</body>
</html>