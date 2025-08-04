<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.BusinessRules.BusinessRulesDesigner" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head runat="server">
<title runat="server"></title>
<app:AppHeader runat="server" id="crmHeader"/>
<script language="javascript" type="text/javascript">
$(document).ready(function() {
Sys.Application.add_init(PblEditorOnLoad);
});
function PblEditorOnLoad() {
var crmFormSubmit = $get("crmFormSubmit");
$addHandler(crmFormSubmit, "submit", OnPblEditorFormSubmit);
var context = [];
context["parameters"] = [];
context["updatedProperties"] = true;
context["isTBXScope"] = window["isTBXScope"];
context["parameters"]["ProcessData"] = [];
context["parameters"]["ProcessData"]["raw"] = window["clientdata"];
window["parentContainer"] = "DesignerArea";

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

context["resources"] = [];
context["resources"]["getAttributeListMetadata"] = function (entityName, callbcak) {
var deferred = Mscrm.BusinessRules.BusinessRuleEntityManager.get_instance().requestAttributes(entityName);
deferred.done(function(result) {
callbcak(result.Fields);
});
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
return ProcessControl.Configuration.PBLClientProxy.getLoadedRelationshipEntityMetadata();
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
MscrmControls.ProcessDesigner.PBLDesignerControl.prototype.initCore(context);
}

function OnPblEditorFormSubmit(domEvent) {
var oCrmFormSubmit = $get('crmFormSubmit');
oCrmFormSubmit.crmFormSubmitXml.value = "";
}
</script>
</head>
<body class="mscrm-pbleditor-Body">
<div class="mscrm-pbleditor">
<div runat="server" id="HeaderViewContainer" class="mscrm-pbleditor-HeaderViewContainer">
</div>
<div runat="server" id="BodyViewContainer" class="mscrm-pbleditor-BodyViewContainer" style="display:none;">
</div>
<div runat="server" id="DesignerArea" class="mscrm-pbleditor-BodyViewContainer custom_control_section">
</div>
<div runat="server" id="FooterViewContainer" class="mscrm-pbleditor-FooterViewContainer">
</div>
</div>

<frm:hardcodedform id="crmForm" runat="server">
</frm:hardcodedform>
</body>
</html>
