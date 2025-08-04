<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.Views.KBTemplateEditorPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader runat="server" id="crmHeader"/>

<script type="text/javascript">

var _oActive;

var oStructureXml;
var oFormatXml;
var oStyle = null;

var titleComponent = null;
var descriptionComponent = null;
var languageCodeComponent = null;
var structureXmlComponent = null;
var formatXmlComponent = null;
var crmFormComponent = null;

function loadXmls()
{
oStructureXml = XUI.Xml.LoadXml(preStructureXml);
oFormatXml = XUI.Xml.LoadXml(preFormatXml);
}

Sys.Application.add_load(function () {
crmFormComponent = $find("crmForm");
titleComponent = Mscrm.FormControlInputBehavior.GetBehavior("title");
descriptionComponent = Mscrm.FormControlInputBehavior.GetBehavior("description");
languageCodeComponent = Mscrm.FormControlInputBehavior.GetBehavior("languagecode");
formatXmlComponent = Mscrm.FormControlInputBehavior.GetBehavior("formatxml");
structureXmlComponent = Mscrm.FormControlInputBehavior.GetBehavior("structurexml");
crmFormSelector = $get("crmFormSelector");

if (!!crmFormSelector) {
$addHandler(crmFormSelector, "click", focusCrmFormSelector);
}
loadXmls();

if (_bNewForm) {
TemplateProperties('new');
}

crmFormComponent.add_onSave(Save);

if (_bIsActive) {
$find("HTMLBAR").add_formatChange(Format);
}


structureXmlComponent.set_forceSubmit(true);
formatXmlComponent.set_forceSubmit(true);
});
function focusCrmFormSelector(e) {
crmFormSelector.focus();
}
$addHandler(window, "unload", function (e) {
if (!!crmFormSelector) {
$removeHandler(crmFormSelector, "click", focusCrmFormSelector);
}
});

function Format(sender, eventData)
{

if (!oStyle) {

for (var j = document.styleSheets.length - 1; j >= 0; j--) {
oStyle = document.styleSheets[j];

if (isNullOrEmptyString(oStyle.href)) {
break;
}
}
}

var rulesCollection;
if (oStyle.rules) {
rulesCollection = oStyle.rules;
}
else {
rulesCollection = oStyle.cssRules;
}

var selectedSectionRule = "DIV." + $get("crmForm").crmFormSelector.value.toUpperCase();
var oRule = null;
for (var i = 0; i < rulesCollection.length; i++) {
var rule = rulesCollection[i];
if (rule.selectorText) {
if (rule.selectorText.toUpperCase() == selectedSectionRule) {
oRule = rule;
break;
}
}
else {
if (rule.cssText && rule.cssText.toUpperCase().indexOf(selectedSectionRule) >= 0) {
oRule = rule;
break;
}
}
}

if (!oRule) {
return;
}

var eventCommand = eventData.get_command();
switch (eventCommand)
{
case "bold":
oRule.style.fontWeight = (oRule.style.fontWeight == "bold") ? "normal" : "bold";
FormatXml("font-weight", oRule.style.fontWeight);
break;

case "italic":
oRule.style.fontStyle = (oRule.style.fontStyle == "italic") ? "normal" : "italic";
FormatXml("font-style", oRule.style.fontStyle);
break;

case "underline":
oRule.style.textDecoration = (oRule.style.textDecoration == "underline") ? "none" : "underline";
FormatXml("text-decoration", (oRule.style.textDecoration == "none") ? "" : oRule.style.textDecoration);
break;

case "ForeColor":
oRule.style.color = eventData.get_commandValue();
FormatXml("color", oRule.style.color);
break;

case "fontsize":
var iFontSize = parseInt(eventData.get_commandValue(), 10);
oRule.style.fontSize = ((iFontSize + 7) + (iFontSize - 1)) + "pt";
FormatXml("font-size", oRule.style.fontSize);
break;

case "fontname":
oRule.style.fontFamily = eventData.get_commandValue();
FormatXml("font-family", oRule.style.fontFamily);
break;
}

UpdateFormData();

eventData.set_isHandled(true);
}

function FormatXml(sStyle, sValue)
{
var oNode = XUI.Xml.SelectSingleNode(oStructureXml, "kbarticle/stylesheet/" + $get("crmForm").crmFormSelector.value, null);

var oStyleNode = XUI.Xml.SelectSingleNode(oNode, "style[@name = '" + sStyle + "']", null);

if (oStyleNode)
{
if (sValue == "")
{

oNode.removeChild(oStyleNode);
}
else
{
oStyleNode.setAttribute("value", sValue);
}
}
else
{
var oNewNode = oStructureXml.createElement("style")
oNewNode.setAttribute("name", sStyle);
oNewNode.setAttribute("value", sValue);

oNode.appendChild(oNewNode);
}
}


function Save(sender, args)
{
if (XUI.Xml.SelectNodes(oStructureXml, "kbarticle/sections/section", null).length <= 2)
{
alert(LOCID_ERR_NOSECTIONS);
args.preventDefault();
}
}

</script>
<ui:XmlRenderer id="xmlRenderer" runat="server"/>
</head>

<body>
<frm:HardcodedForm id="crmForm" runat="server">

<sdk:HiddenInputControl id="title" runat="server"/>
<sdk:HiddenInputControl id="description" runat="server"/>
<sdk:HiddenInputControl id="languagecode" runat="server"/>
<sdk:HiddenInputControl id="structurexml" runat="server"/>
<sdk:HiddenInputControl id="formatxml" runat="server"/>

<table class="ms-crm-TemplateEditorTable ms-crm-ZeroedCellPadding ms-crm-ZeroedCellSpacing">
<col /><col class="template_editor_col_2" />
<tr>
<td height="110" colspan="2" class="ms-crm-MenuBarCell">
<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</td>
</tr>
<tr class="ms-crm-Form-Background">
<td colspan="<%=(_isActive ? "1" : "2")%>" class="kbtemplateeditor_td_AreaForm" >
<div id="areaForm" class="ms-crm-Form-Area">
<table class="ms-crm-ContentTable ms-crm-ZeroedCellPadding ms-crm-ZeroedCellSpacing">
<asp:PlaceHolder id="editorContent" runat="server"/>
<tr>
<td id="editor"><ui:XmlRenderer id="editorRenderer" runat="server"/></td>
</tr>
</table>
</div>
</td>
<asp:PlaceHolder id="taskBoxContent" runat="server"/>
</tr>
<tr>
<td class="ms-crm-Form-StatusBar" colspan="2"></td>
</tr>
</table>

</frm:HardcodedForm>

</body>
</html>
