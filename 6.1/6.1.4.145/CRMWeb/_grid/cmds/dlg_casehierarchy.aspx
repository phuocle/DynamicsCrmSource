<%@ Page Language="C#" Inherits="Microsoft.Crm.Service.Application.Pages.Dialogs.CaseHierarchyDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<title><loc:Text ResourceId="Web.Tools.ViewEditor.Dialogs.SelectValues.aspx_5" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
var _a = [];
var _sAction = "casehierarchy";
var _iObjType = 112;
var iTotal = 0;
var iIndex = 0;
var _createAttributeMaps = [];
var _sFieldSelectLeftTitleforAttributes = LOCID_AVAILABLE_ATTRIBUTES;
var _sFieldSelectRightTitleforAttributes = LOCID_SELECTED_ATTRIBUTES;

var _oTags =
{
attributemap: "attributemap",
sourceattributename: "sourceattributename",
targetattributename: "targetattributename",
sCreateCommandParameterName: "CreateAttributeMaps",
sDeleteCommandParameterName: "DeleteAttributeMaps",
sOrgStatusUpdateParameterName: "OrgCascadeStatusAttributes",
sCascadeStatusUpdate: "CascadeStatusUpdate",
sRestrictStatusUpdate: "RestrictStatusUpdate",
sCaseCascadePreference: "CaseCascadePreference",
entitymapid: "entitymapid"
};

var dialogArguments = getDialogArguments();
var _sEntintyMapId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(dialogArguments.valuesXml, "//@EntityMapId", null));
var _sAttributeMapIds = getAttributeValuesFromDoc(dialogArguments, "select/option[@AttributeMapId!='']", "AttributeMapId");
var _sSystemRequiredAttributes = getAttributeValuesFromDoc(dialogArguments, "select/option[@IsSystemRequired='true']", "value");
var _sBusinessRequiredAttributes = getAttributeValuesFromDoc(dialogArguments, "select/option[@IsBusinessRequired='true']", "value");

dialogArguments["sSelectedValues"] = getAttributeValuesFromDoc(dialogArguments, "select/option[@IsSelected='true']", "value").join(';');

function cancel() {
closeWindow();
}


function getAttributeValuesFromDoc(dialogArguments, xPathExpression, attributeName) {
var attributMapNodes = XUI.Xml.SelectNodes(dialogArguments.valuesXml, xPathExpression, null);
var attributeMapValues = new Array(attributMapNodes.length);
for (var i = 0; i < attributMapNodes.length; i++) {
attributeMapValues[i] = XUI.Xml.GetText(attributMapNodes[i].attributes.getNamedItem(attributeName));
}
return attributeMapValues;
}




function applychanges() {
XUI.Html.SetText($get("dialogHeaderDesc"), LOCID_CASE_HIERARACHY_SETTINGS);
if (validateParameters()) {
var oDataXml = createXmlDoc("AttributeMaps");
oDataXml.appendChild(createAttributeMappingXml());
oDataXml.appendChild(deleteAttributeMappingXml());
oDataXml.appendChild(addOrgCascadeStatusUpdate());
var _sMappingXml = convertXmlDocToString(oDataXml);
__dialogXml = convertXmlDocToString(oDataXml);
_a = [0];
go();
}
else {
alert(LOCID_CHILD_CASES_SUCCESSFULLY);
}
}


function validateParameters() {

var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows, iLen = oRows.length, sDependsAry = [];
if (oRows.length <= 0) {
return false;
}

for (var i = 0; i < oRows.length; i++) {
_a[i] = XUI.Html.DomUtils.GetFirstChild(oRows[i]).id;
}
_createAttributeMaps = _a;


for (var i = 0; i < _sSystemRequiredAttributes.length; i++) {
var _elementExists = false;
for (var j = 0; j < _a.length; j++) {
if (_sSystemRequiredAttributes[i] == _a[j]) {
_elementExists = true;
_createAttributeMaps[j] = null;
break;
}
}
if (_elementExists == false) {
return false;
}
}


for (var i = 0; i < _sBusinessRequiredAttributes.length; i++) {
var _elementExists = false;
for (var j = 0; j < _a.length; j++) {
if (_sBusinessRequiredAttributes[i] == _a[j]) {
_elementExists = true;
break;
}
}
if (_elementExists == false) {
return false;
}
}
return true;
}


function createAttributeMappingXml() {
var oDataXml = createXmlDoc(_oTags.sCreateCommandParameterName);
for (var i = 0; i < _createAttributeMaps.length; i++) {
var attributeName = _createAttributeMaps[i];
if (attributeName != null) {
var oDataXml_tmp = "";
oDataXml_tmp = createXmlDoc(_oTags.attributemap);
addTextXmlNode(oDataXml_tmp, _oTags.sourceattributename, attributeName);
addTextXmlNode(oDataXml_tmp, _oTags.targetattributename, attributeName);
addTextXmlNode(oDataXml_tmp, _oTags.entitymapid, "{" + _sEntintyMapId + "}");
oDataXml.appendChild(oDataXml_tmp);
}
}
return oDataXml;
}


function deleteAttributeMappingXml() {
var oDataXml = createXmlDoc(_oTags.sDeleteCommandParameterName);
for (var i = 0; i < _sAttributeMapIds.length; i++) {
addTextXmlNode(oDataXml, _oTags.attributemap, _sAttributeMapIds[i]);
}
return oDataXml;
}


function addOrgCascadeStatusUpdate() {
var oDataXml = createXmlDoc(_oTags.sOrgStatusUpdateParameterName);
addTextXmlNode(oDataXml, _oTags.sCascadeStatusUpdate, $get('rdChildCases').checked);
addTextXmlNode(oDataXml, _oTags.sRestrictStatusUpdate, $get('rdRestrict').checked);
addTextXmlNode(oDataXml, _oTags.sCaseCascadePreference, $get('checkBoxCaseCascade').checked);

return oDataXml;
}
function onCaseCascadeClick() {
var Sel_rdboxChildCases = $get("rdChildCases");
var Sel_rdboxRestrict = $get("rdRestrict");


if ($get("checkBoxCaseCascade").checked) {
Sel_rdboxChildCases.removeAttribute("disabled");
Sel_rdboxRestrict.removeAttribute("disabled");
}
else {
Sel_rdboxChildCases.setAttribute("disabled", true);
Sel_rdboxRestrict.setAttribute("disabled", true);
}
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table border="0" cellspacing="0" cellpadding="0" width="100%" height="67%">
<tr>
<td colspan="3">
<div id="divFieldSelect" width="100%">
</td>
</tr>
</table>
<table border="0">
<tr>
<td colspan="5">
<label>
<loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.aspx_11" runat="server"/>
</label>
</td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td>&nbsp;</td>
<td align ="right" style ="width:1%"><crm:CheckBox id="checkBoxCaseCascade" onclick="onCaseCascadeClick();" runat="server"/>  </td>
<td>
<label for="checkBoxCaseCascade">
<loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.aspx_12" runat="server"/>
</label>
</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<table border="0" cellspacing="0" cellpadding ="0">
<tr>
<td align ="left"><input type="radio" class="radio" name ="radioCases" id="rdChildCases" runat="server" /></td>
<td align ="left"><label for="radioCases" style ="vertical-align:text-top"><loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.aspx_4" runat="server"/></label></td>
</tr>
<tr>
<td align ="left"><input type="radio" class="radio" name ="radioCases" id="rdRestrict" runat="server" /> </td>
<td align ="left"><label  for="rdRestrict" style ="vertical-align:text-top"><loc:Text ResourceId="Web._grid.cmds.dlg_casehierarchy.aspx_5" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>