<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.QuickFormCollectionControl" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<script language="javascript">

var _oFormXml;
var _oFormType;
var _oPropertiesXml;
var _oFieldsXml;
var _oQuickFormObj;
var _quickFormCollectionControlId;
var _objectCode;
var _lookupFieldsXml;
var _quickFormXml;
var _sDataFieldName;
var _oQuickFormCollectionInfo;
var _isReferencePanelQuickFormCollection;
var _webResourcesControl = null;
var _displayAsCustomer360Tile;

var _formWindow = false;
var _secCols = 1;
var _sTabName = null, _sSectionName = null;
var _labelDirty = false;
var _sEditorType = 'formEditor';
var _oRelatedEntities = new Array();
_oRelatedEntities.type = "int";
var oArgs;

var VALUE_SELECT = "0";

Sys.Application.add_load(OnQuickFormWindowLoad);

function OnQuickFormWindowLoad() {
oArgs = getDialogArguments();

_oFormXml = oArgs.FormXml;

_oFormType = oArgs.FormType;

_oPropertiesXml = oArgs.FieldPropertiesXml;

_oFieldsXml = oArgs.FieldsXml;

_oQuickFormObj = oArgs.Field;

var oLabels = _oQuickFormObj.Labels;

_quickFormCollectionControlId = _oQuickFormObj.Id;

_sDataFieldName = _oQuickFormObj.DataFieldName;

_oQuickFormCollectionInfo = _oQuickFormObj.QuickFormCollectionInfo;

_isReferencePanelQuickFormCollection = _oQuickFormObj.IsReferencePanelQuickFormCollection;

var txtLabel = $get('txtLabel');
var txtDesc = $get('txtDescription');
var chkDispOption = $get('chkDispOption');
_displayAsCustomer360Tile = $get('displayAsCustomer360Option');

txtDesc.value = _quickFormCollectionControlId;
if (!IsNull(oLabels) && !IsNull(oLabels[0]) && !IsNull(oLabels[0].Description))
{
txtLabel.value = oLabels[0].Description;
}
chkDispOption.checked = _oQuickFormObj.ShowLabel;


_displayAsCustomer360Tile.checked = _oQuickFormObj.DisplayAsCustomer360Tile;


if (_isReferencePanelQuickFormCollection) {
$get('divRefPanDetails').style.display = "inline";
_webResourcesControl = Mscrm.FormControlInputBehavior.GetBehavior('iconResources');
}
else {
$get('divRefPanDetails').style.display = "none";
}



if (_oFormType != "mainInteractionCentric") {
$get('AdditionalProperties').style.display = "none";
}


_lookupFieldsXml = GetLookupFieldsXml(_oPropertiesXml, _oFieldsXml);

_quickFormXml = GetQuickFormsForAllEntities(_oRelatedEntities);
SetDisableEditButton(true);
populateParentAttribute();

populateRelatedEntity();

if (_oQuickFormCollectionInfo != null) {
PopulateDialogForEdit();
}
else {
populateEmbedForm();
populateQuickFormViewer();
}
}

function PopulateDialogForEdit() {

quickFormViewerData = new Select();
quickFormViewerData.ID = "QuickFormViewerCombo";
quickFormViewerData.SetMultiSelect(true, 4);
var optGroupFormSelector = new OptionGroup("", true, true, false);

var relatedEntity = $get('RelatedEntityCombo');
var len = relatedEntity.options.length;
var i;
var xmlDoc = XUI.Xml.LoadXml(_quickFormXml);

for (i = 0; i < len; i++) {
var dispName = new Array();
dispName.push(relatedEntity.options[i].title);
var logicalName = relatedEntity.options[i].value;
var value = logicalName;
var j;
var jlen = _oQuickFormCollectionInfo.length;
var found = false;
for (j = 0; j < jlen; j++) {
if (_oQuickFormCollectionInfo[j].entity == logicalName) {

var quickForms = GetQuickForms(xmlDoc, logicalName);
var k = 0;
var klen = quickForms.length;

for (k = 0; k < klen; k++) {
if (_oQuickFormCollectionInfo[j].formId.toLowerCase() == quickForms[k].formId) {
dispName.push(quickForms[k].formName);
value += ":" +  quickForms[k].formId;
break;
}
}
found = true;
break;
}
}
if (found == false) {
dispName.push(LOCID_SELECT_STRING);
value += ":" + VALUE_SELECT;
}
optGroupFormSelector.AddOption(GetSelectOptionDisplayName(dispName), value);
}

quickFormViewerData.AddOptionGroup(optGroupFormSelector);
quickFormViewerData.AddToControl($get("quickFormViewer"));

$get("QuickFormViewerCombo").disabled = "true";


populateEmbedForm();
}

/*************************************************************
_lookupFieldsXml format
<fields>
<field name="primarycontactid" displayname="Primary Contact">
<objecttypecode value="2" entityName ="Contact"/>
</field>
</fields>
**************************************************************/
function GetLookupFieldsXml(oPropertiesXml, oFieldsXml) {
var sFieldName;
var sFieldLocName;


var oFields = null;
oFields = XUI.Xml.SelectNodes(oPropertiesXml, "/entity/fields/field[@name]", null);


var sFieldsXml = "<fields>";
if (!IsNull(oFields)) {
var oEntityField;
var i;
var iLen = oFields.length;
var oFormat, sFormat;

for (i = 0; i < iLen; i++) {
sFieldName = oFields[i].getAttribute("name");


var checkField = XUI.Xml.LoadXml(sFieldsXml + "</fields>");
if (XUI.Xml.SelectSingleNode(checkField, "/fields/field[@name = '" + CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName) + "']", null) == null)
{
oEntityFields = XUI.Xml.SelectNodes(oFieldsXml, "/entity/fields/field[@name = '" + CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName) + "']", null);

if (null != oEntityFields && oEntityFields.length > 0) {

var dataType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oEntityFields[0], "./@datatype", null));
if (dataType == "lookup" || dataType == "customer" || dataType == "owner" || dataType == "subject") {

if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oEntityFields[0], "./@validforform", null)) == "true") {
var jFieldLen = oEntityFields.length;
var j = 0;
var otc = new Array();
for (j = 0; j < jFieldLen; j++) {
otc.push(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oEntityFields[j], "./@objecttypecode", null)));
}

if(!(otc.length == 1 && otc[0] == '0'))
{

sFieldsXml += "<field name=\""
+ CrmEncodeDecode.CrmXmlAttributeEncode(sFieldName)
+ "\" displayname=\""
+ CrmEncodeDecode.CrmXmlAttributeEncode(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oFields[i], "displaynames/displayname[@languagecode = \"" + CrmEncodeDecode.CrmXmlAttributeEncode(USER_LANGUAGE_CODE) + "\"]/@description", null)))
+ "\">";


for (j = 0; j < otc.length; j++) {
if(otc[j] != '0')
{
sFieldsXml += "<objecttypecode value=\""
+ CrmEncodeDecode.CrmXmlAttributeEncode(otc[j])
+ "\"/>";

_oRelatedEntities.push(otc[j]);
}
}
sFieldsXml += "</field>";
}
}
}
}
}
}
}
sFieldsXml += "</fields>";

return sFieldsXml;
}

/*************************************************************
_quickFormXml format
<entities>
<entity objecttypecode ="8" name ="SystemUser" logicalName ="systemuser">
<form Id="58554ccb-9087-4cf6-a380-9a8e4c02aea9" Name="New Form" />
<form Id="44d88775-606b-44d5-a6ef-8cbef0bf2de6" Name="User Form" />
</entity>
</entities>
**************************************************************/
function GetQuickFormsForAllEntities(oRelatedEntities) {
var quickFormXml = null;

oRelatedEntities.sort();
var i = 1;
var j = 0;
var len = oRelatedEntities.length;
while(i != len){
if (oRelatedEntities[i] != oRelatedEntities[j]) {
j++;
oRelatedEntities[j] = oRelatedEntities[i];
}
i++;
}
while (j != len-1) {
oRelatedEntities.pop();
j++;
}


try {
var command = new RemoteCommand("FormEditorWebService", "GetEntityQuickFormXml");
command.SetParameter("entityCodes", oRelatedEntities);
var result = command.Execute();
if (result.Success) {
quickFormXml = result.ReturnValue;
}
}
catch (e) {
}

return quickFormXml;
}

function populateParentAttribute() {

_parentAttrData = new Select();
_parentAttrData.ID = "ParentAttr";
var optGroupParentAttr = new OptionGroup("", true, true, false);
_parentAttrData.Sorted = true;
_parentAttrData.Ascend = true;
_parentAttrData.OnChange = "onChangeParentAttr()";

var i, len, entityData;
var lookupFieldXmlDoc, dispName, entityInfo = "", quickFormXmlDoc;

if (_lookupFieldsXml != null) {
lookupFieldXmlDoc = XUI.Xml.LoadXml(_lookupFieldsXml);
quickFormXmlDoc = XUI.Xml.LoadXml(_quickFormXml);
var oNodes = XUI.Xml.SelectNodes(lookupFieldXmlDoc, "/fields/field[@name]", null);
len = oNodes.length;



for (i = 0; i < len; i++)
{
var foundCreateEntity = false;
dispName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oNodes[i], "./@displayname", null));
entityInfo = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oNodes[i], "./@name", null));
var j, jlen, otcNodes;
var otcNodes = XUI.Xml.SelectNodes(oNodes[i], "/fields/field[@name = '" + CrmEncodeDecode.CrmXmlAttributeEncode(entityInfo) + "']/objecttypecode[@value]", null);
jlen = otcNodes.length;
for (j = 0; j < jlen; j++)
{
var otc = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(otcNodes[j], "./@value", null));
var entityNodes = XUI.Xml.SelectSingleNode(quickFormXmlDoc, "/entities/entity[@objecttypecode = '" + CrmEncodeDecode.CrmXmlAttributeEncode(otc) + "']", null);
var isQuickViewLookupEntity = true;
var isInteractionCentricEnabledentities = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@isinteractioncentricenabled", null));
var isVisibleInMobileClient = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@isvisibleinmobileclient", null));
if (_oFormType == "mainInteractionCentric")
{
if (!(isInteractionCentricEnabledentities == "true" || isVisibleInMobileClient == "true")) {
isQuickViewLookupEntity = false;
}
}
if (isQuickViewLookupEntity)
{
var entityName = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@name", null)));
var entityLogicalName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@logicalname", null));
entityInfo += ":" + entityName + ":" + entityLogicalName;
foundCreateEntity = true;
}
}
if (foundCreateEntity == true)
{
optGroupParentAttr.AddOption(dispName, entityInfo);
}
}
}
_parentAttrData.AddOptionGroup(optGroupParentAttr);
_parentAttrData.AddToControl($get('ParentAttribute'));

if (_sDataFieldName) {

var parentAttribute = $get("ParentAttr");
var len = parentAttribute.options.length;
var i;
for (i = 0; i < len; i++) {
var value = parentAttribute.options[i].value.split(':');
if (value[0] == _sDataFieldName) {
parentAttribute.options[i].selected = "true";
break;
}
}
}
}

function populateRelatedEntity() {
_relEntityData = new Select();
_relEntityData.ID = "RelatedEntityCombo";
var optGroupRelEntity = new OptionGroup("", true, true, false);
optGroupRelEntity.Sorted = true;
optGroupRelEntity.Ascend = true;
_relEntityData.OnChange = "onChangeRelatedEntity()";


var relatedEntityInfo = $get('ParentAttr').value.split(':');
var i = 1;
var len = relatedEntityInfo.length;
for (i = 1; i < len; i = i + 2) {
optGroupRelEntity.AddOption(relatedEntityInfo[i], relatedEntityInfo[i+1]);
}

_relEntityData.AddOptionGroup(optGroupRelEntity);
_relEntityData.AddToControl($get('RelatedEntity'));

enableDisableCustomer360CheckBox();
}

function populateEmbedForm() {
embedFormData = new Select();
embedFormData.ID = "EmbedFormCombo";
var optGroupEmbedForm = new OptionGroup("", false, false, false);
embedFormData.OnChange = "onChangeEmbedForm()";
var selectedIndex = 0;
var entityLogicalName = $get('RelatedEntityCombo').value;


var quickFormViewerData = $get("QuickFormViewerCombo");
var formId;
if(quickFormViewerData != null && quickFormViewerData.options.length != 0)
{
var len = quickFormViewerData.options.length;
var i;

for (i = 0; i < len; i++) {
var value = quickFormViewerData.options[i].value.split(':');
if (value[0] == entityLogicalName && value[1] != VALUE_SELECT) {
formId = value[1];
break;
}
}
}

optGroupEmbedForm.AddOption(LOCID_SELECT_STRING, "0");
if (_quickFormXml != null) {
var xmlDoc = XUI.Xml.LoadXml(_quickFormXml);
var quickForms = GetQuickForms(xmlDoc, entityLogicalName);
var i = 0;
var len = quickForms.length;
for (i = 0; i < len; i++) {
optGroupEmbedForm.AddOption(quickForms[i].formName, quickForms[i].formId);
if(quickForms[i].formId == formId)
{
selectedIndex = i+1;
}
}
}

embedFormData.AddOptionGroup(optGroupEmbedForm);
embedFormData.AddToControl($get('EmbedForm'));
$get('EmbedFormCombo').options[selectedIndex].selected = true;
if($get('EmbedFormCombo').value == VALUE_SELECT)
{
SetDisableEditButton(true);
}
else
{
SetDisableEditButton(false);
}
}

function populateQuickFormViewer() {

quickFormViewerData = new Select();
quickFormViewerData.ID = "QuickFormViewerCombo";
quickFormViewerData.SetMultiSelect(true, 4);
var optGroupFormSelector = new OptionGroup("", false, false, false);


var relatedEntity = $get('RelatedEntityCombo');
var len = relatedEntity.options.length;
var i;
for (i = 0; i < len; i++) {
var dispName = new Array();
dispName.push(relatedEntity.options[i].title);
var value = relatedEntity.options[i].value;
if (relatedEntity.value == value) {
var embedForm = $get("EmbedFormCombo");
dispName.push(embedForm.options[embedForm.selectedIndex].title);
value += ":" + embedForm.options[embedForm.selectedIndex].value;
}
else {
dispName.push(LOCID_SELECT_STRING);
value += ":" + VALUE_SELECT;
}
optGroupFormSelector.AddOption(GetSelectOptionDisplayName(dispName), value);
}

quickFormViewerData.AddOptionGroup(optGroupFormSelector);
quickFormViewerData.AddToControl($get("quickFormViewer"));

$get("QuickFormViewerCombo").disabled = "true";
}

function onChangeParentAttr() {
RemoveSelectElement($get('RelatedEntityCombo'));
populateRelatedEntity();
RemoveSelectElement($get('EmbedFormCombo'));
populateEmbedForm();
RemoveSelectElement($get('QuickFormViewerCombo'));
populateQuickFormViewer();
onChangeNewButtonHandle();
}

function onChangeRelatedEntity() {
RemoveSelectElement($get('EmbedFormCombo'));
populateEmbedForm();
if($get('EmbedFormCombo').value == VALUE_SELECT)
{
SetDisableEditButton(true);
}
else
{
SetDisableEditButton(false);
}

enableDisableCustomer360CheckBox();
onChangeNewButtonHandle();
}

function onChangeNewButtonHandle() {
var lookupFieldXmlDoc, entityInfo = "", quickFormXmlDoc, parentAttributeName = "";
var parentAttribute = document.getElementById("ParentAttr");
if (parentAttribute != null) {
parentAttributeName = parentAttribute.options[parentAttribute.selectedIndex].text;
}

if (_lookupFieldsXml != null) {
lookupFieldXmlDoc = XUI.Xml.LoadXml(_lookupFieldsXml);
quickFormXmlDoc = XUI.Xml.LoadXml(_quickFormXml);
var oNode = XUI.Xml.SelectSingleNode(lookupFieldXmlDoc, "/fields/field[@displayname = '" + parentAttributeName + "']", null);
entityInfo = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oNode, "./@name", null));
var j, jlen, otcNodes;
var otcNodes = XUI.Xml.SelectNodes(oNode, "/fields/field[@name = '" + CrmEncodeDecode.CrmXmlAttributeEncode(entityInfo) + "']/objecttypecode[@value]", null);
jlen = otcNodes.length;
for (j = 0; j < jlen; j++) {
var otc = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(otcNodes[j], "./@value", null));
var entityNodes = XUI.Xml.SelectSingleNode(quickFormXmlDoc, "/entities/entity[@objecttypecode = '" + CrmEncodeDecode.CrmXmlAttributeEncode(otc) + "']", null);
var canCreateForms = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@cancreateforms", null));
if (canCreateForms == "false") {
SetDisableNewButton(true);
return;
}
}
}
SetDisableNewButton(false);
}

function enableDisableCustomer360CheckBox() {
var entityLogicalName = $get('RelatedEntityCombo').value;
if (entityLogicalName == "account" || entityLogicalName == "contact") {
_displayAsCustomer360Tile.disabled = false;
}
else {
_displayAsCustomer360Tile.checked = false;
_displayAsCustomer360Tile.disabled = true;
}
}

function onChangeEmbedForm() {
UpdateQuickFormViewer();
if($get('EmbedFormCombo').value == VALUE_SELECT)
{
SetDisableEditButton(true);
}
else
{
SetDisableEditButton(false);
}
}

function UpdateQuickFormViewer() {
var relatedEntity = $get("RelatedEntityCombo");

var embedFormData = $get("EmbedFormCombo");

var quickFormViewerData = $get("QuickFormViewerCombo");
var dispName = new Array();
dispName.push(relatedEntity.options[relatedEntity.selectedIndex].title);
dispName.push(embedFormData.options[embedFormData.selectedIndex].title);
quickFormViewerData.options[relatedEntity.selectedIndex].title = GetSelectOptionDisplayName(dispName);
quickFormViewerData.options[relatedEntity.selectedIndex].value = relatedEntity.options[relatedEntity.selectedIndex].value + ":" + embedFormData.options[embedFormData.selectedIndex].value;
quickFormViewerData.options[relatedEntity.selectedIndex].innerHTML = quickFormViewerData.options[relatedEntity.selectedIndex].title;
}

function applychanges() {


var txtLabel = $get('txtLabel');
var txtDesc = $get('txtDescription');
var iconResourceUrl = null;

if (_isReferencePanelQuickFormCollection) {
if (_webResourcesControl.get_dataValue() == null) {
alert(LOCID_ENTER_ICON);
$get('iconResources').focus();
return;
}

iconResourceUrl = _webResourcesControl.get_dataValue()[0].name;
}

if (txtDesc.value.length == 0) {
alert(LOCID_ENTER_SUBFORM_NAME);
txtDesc.select();
return;
}
if (txtLabel.value.length == 0) {
alert(LOCID_ENTER_SUBFORM_LABEL);
txtLabel.select();
return;
}

if (!IsIdValid(txtDesc.value) || txtDesc.value.startsWith("_") || !isNaN(txtDesc.value.substring(0, 1))) {
alert(LOCID_ALPHANUMERIC_ONLY);
txtDesc.select();
return;
}


if (_quickFormCollectionControlId != txtDesc.value) {
var oNodes = null;
if (_isReferencePanelQuickFormCollection) {
oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.referencepanelquickformcollection + "']", null);
}
else {
oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.quickformcollection + "']", null);
}
var iLen = oNodes.length;
for (var i = 0; i < iLen; i++) {
if (oNodes[i].getAttribute("id") === txtDesc.value) {
if (_isReferencePanelQuickFormCollection) {
alert(LOCID_REFPANSUBFORM_EXISTS);
}
else {
alert(LOCID_SUBFORM_EXISTS);
}
txtDesc.select();
return;
}
}
}

_quickFormCollectionControlId = txtDesc.value;


var value = $get('ParentAttr').value.split(':');
sDataFieldName = value[0];


var quickFormViewerData = $get("QuickFormViewerCombo");
var len = quickFormViewerData.options.length;
var i;
var quickFormCollectionInfo = new Array();
var entities = new Array();
entities.type = "string";
var hasForm = false;
for (i = 0; i < len; i++) {
var value = quickFormViewerData.options[i].value.split(':');
if (value[1] != VALUE_SELECT) {
var relatedQuickFormInfo = new RelatedQuickFormInfo(value[0], value[1]);
quickFormCollectionInfo.push(relatedQuickFormInfo);
entities.push(value[0]);
hasForm = true;
}
}


if(!hasForm){
alert(LOCID_SELECT_ATLEAST_ONE_FORM);
return;
}
var ret = new QuickFormObj(
_quickFormCollectionControlId,
$get('chkDispOption').checked,
new Array(new LocalizedObj(txtLabel.value, oArgs.LangCode)),
false,
sDataFieldName,
quickFormCollectionInfo,
_isReferencePanelQuickFormCollection,
iconResourceUrl,
$get('displayAsCustomer360Option').checked);
Mscrm.Utilities.setReturnValue(ret);

closeWindow();
}

function createQuickForm() {
var crmUrl = Mscrm.CrmUri.create("/main.aspx?pagetype=formeditor");

var entityLogicalName = $get('RelatedEntityCombo').value;
var quickFormXml = XUI.Xml.LoadXml(_quickFormXml);
var entityNodes = XUI.Xml.SelectSingleNode(quickFormXml, "/entities/entity[@logicalname = '" + CrmEncodeDecode.CrmXmlAttributeEncode(entityLogicalName) + "']", null);
var otc = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@objecttypecode", null));

crmUrl.get_query()["etc"] = otc;
crmUrl.get_query()["extraqs"] = "formtype=" + CrmEncodeDecode.CrmNameValueEncode("quick") + "&action=" + CrmEncodeDecode.CrmNameValueEncode("0");
_formWindow = true;
openStdWin(crmUrl, buildWinName(), _oConst.iAttributeEditorWidth, _oConst.iAttributeEditorHeight);
}

function editQuickForm() {
var crmUrl = Mscrm.CrmUri.create("/main.aspx?pagetype=formeditor");

var entityLogicalName = $get('RelatedEntityCombo').value;
var quickFormXml = XUI.Xml.LoadXml(_quickFormXml);
var entityNodes = XUI.Xml.SelectSingleNode(quickFormXml, "/entities/entity[@logicalname = '" + CrmEncodeDecode.CrmXmlAttributeEncode(entityLogicalName) + "']", null);
var otc = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@objecttypecode", null));

crmUrl.get_query()["etc"] = otc;
formId = $get("EmbedFormCombo").value;
crmUrl.get_query()["extraqs"] = "formtype=" + CrmEncodeDecode.CrmNameValueEncode("quick") + "&formId=" + CrmEncodeDecode.CrmNameValueEncode(formId) +
"&action=" + CrmEncodeDecode.CrmNameValueEncode("-1");
_formWindow = true;
openStdWin(crmUrl, buildWinName(), _oConst.iAttributeEditorWidth, _oConst.iAttributeEditorHeight);
}

function RefreshComboIfRequired() {
if (_formWindow) {

if (_quickFormXml != null) {
var formUpdated = false;

var entityLogicalName = $get('RelatedEntityCombo').value;
var oldFormXml = XUI.Xml.LoadXml(_quickFormXml);



var entityNodes = XUI.Xml.SelectSingleNode(oldFormXml, "/entities/entity[@logicalname = '" + CrmEncodeDecode.CrmXmlAttributeEncode(entityLogicalName) + "']", null);
var otc = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(entityNodes, "./@objecttypecode", null));
var typeCodes = new Array();
typeCodes.type = "int";
typeCodes.push(otc);
var xmlStr = GetQuickFormsForAllEntities(typeCodes);

if (xmlStr != null) {
var newFormXml = XUI.Xml.LoadXml(xmlStr);
var newQuickForms = GetQuickForms(newFormXml, entityLogicalName);


var oldQuickForms = GetQuickForms(oldFormXml, entityLogicalName);

if (newQuickForms.length != oldQuickForms.length) {
formUpdated = true;
}
else {

var i, len;
len = newQuickForms.length;
for (i = 0; i < len; i++) {
if (oldQuickForms[i].formName != newQuickForms[i].formName) {
formUpdated = true;
break;
}
}
}

if (formUpdated) {
var xmlDoc = XUI.Xml.LoadXml(_quickFormXml);
var node = XUI.Xml.SelectSingleNode(xmlDoc, "/entities/entity[@objecttypecode = '" + CrmEncodeDecode.CrmXmlAttributeEncode(otc) + "']", null);
node.parentNode.replaceChild(XUI.Xml.SelectSingleNode(newFormXml, "/entities/entity", null), node);
_quickFormXml = XUI.Xml.XMLSerializer.serializeToString(xmlDoc);
var selectedForm = $get('EmbedFormCombo').value;
populateEmbedForm();
$get('EmbedFormCombo').value = selectedForm;
UpdateQuickFormViewer();
}
}
}
_formWindow = false;
}
}

function GetSelectOptionDisplayName(nameArr) {
var len = nameArr.length;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
var name = nameArr[len-1];
for(var i = len - 2; i >=0 ; i--)
{
name += " : " + nameArr[i];
}
return name;
<% } %>
<% else { %>
var name = nameArr[0];
for (var i = 1; i < len; i++) {
name += " : " + nameArr[i];
}
return name;
<% } %>
}

function RemoveSelectElement(node) {
node.parentNode.removeChild(node);
}

function GetQuickForms(xmlDoc, entity) {
var quickForms = new Array();
var formNodes = XUI.Xml.SelectNodes(xmlDoc, "/entities/entity[@logicalname = '" + CrmEncodeDecode.CrmXmlAttributeEncode(entity) + "']/form[@Id]", null);
var i = 0;
var len = formNodes.length;

for (i = 0; i < len; i++) {
var formName = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(formNodes[i], "./@Name")));
var formId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(formNodes[i], "./@Id"));
var quickForm = new QuickForm(formName, formId);
quickForms.push(quickForm);
}
return quickForms;
}

function QuickForm(formName, formId) {


this.formName = formName;
this.formId = formId;
}

function SetDisableEditButton(value)
{
$get('editFormId').disabled = value;
}

function SetDisableNewButton(value)
{
$get('newFormId').disabled = value;
}

</script>

</head>
<body onmouseover="RefreshComboIfRequired();">
<frm:DialogForm id="crmForm" runat="server">

<div style="width:100%; min-width:390px;">
<div class="formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">

<div id="tab0" class="ms-crm-Tab" style="display: inline;">

<div id="divRefPanDetails" style="display: none;">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_348" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_349" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col width="70" />
<tr>
<td class="ms-crm-Field-Required" id="iconresource_c"><label><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_350" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:LookupControl id="iconResources" DefaultViewId="DCAC5DFC-2EFF-42b3-9A0D-AFF1577533EB" DisableViewPicker="true" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</tr>
</table>
</fieldset>
<br />
</div>

<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_195" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col width="70" />
<tr>
<td class="ms-crm-Field-Required" id="name_c"><label for="txtDescription"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_200" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtDescription" MaxLength="255" runat="server"/></td>
</tr>
</table>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col width="70"/>
<tr>
<td class="ms-crm-Field-Required" id="label_c"><label for="txtLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subform.aspx.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtLabel" MaxLength="255" runat="server"/></td>
</tr>
</table>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="chkDispOption" runat="server"/></td>
<td ><label for="chkDispOption" id="checkDisplayOptionLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br />


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubForm.aspx.DataSourceLegend" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubForm.aspx.DataSourceDescription" runat="server"/>
</div>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30%" /><col width="70%" />
<tr>
<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subform.aspx.LookupLabel" runat="server"/></label></td>
<td id="ParentAttribute"></td>
</tr>
<tr>
<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subform.aspx.RelatedEntity" runat="server"/></label></td>
<td id="RelatedEntity"></td>
</tr>
<tr>
<td><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subform.aspx.SubForm" runat="server"/></label></td>
<td id="EmbedForm"></td>
</tr>
<tr>
<td colspan='2'><label id="quickFormViewerLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subform.aspx.SelectedSubForm" runat="server"/>&nbsp;</label></td>
</tr>
<tr>
<td colspan="3" id="quickFormViewer"></td>
</tr>
</table>

<table id="newFormTable" cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="40%"/><col width="25%"/><col width="25%"/><col width="10%"/>
<tr>
<td/>
<td><ui:Button id="editFormId" CssClass="ms-crm-RefreshDialog-Button" onclick="editQuickForm();" ResourceId="Edit_QuickForm_From_SubForm" runat="server"/></ui:Button></td>
<td><ui:Button id="newFormId" CssClass="ms-crm-RefreshDialog-Button" onclick="createQuickForm();" ResourceId="New_QuickForm_From_SubForm" runat="server"/></ui:Button></td>
<td/>
</tr>
</table>
</fieldset>
<br />


<fieldset id="AdditionalProperties">
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.Fields.aspx.LookupPropSection" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubForm.aspx.QuickViewRenderDescription" runat="server"/>
</div>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="displayAsCustomer360Option" runat="server"/></td>
<td ><label for="displayAsCustomer360Option" id="displayAsCustomer360Tile"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubForm.aspx.DisplayAsCustomer360Label" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
