





<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.SubGrid" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<script language="javascript">

var _oFormXml;
var _oFieldsXml;
var _oField;
var _iEntityCode;
var _subGridId;
var _objectCode;

var _allEntities;
var _allEntitiesObjectCode;
var _allEntitiesData;
var _allEntityHTML;

var _relatedEntities;
var _relatedEntitiesObjectCode;
var _relEntityData;
var _relEntityHTML;

var _viewComboData;
var _viewComboHTML;

var _defaultViz = "";
var _viewWindow = null;
var GRID = 'Grid';
var ALL = 'All';
var CHART = 'Chart';
var _secCols = 1;
var _sTabName = null, _sSectionName = null;
var _labelDirty = false;
var _sEditorType = 'formEditor';
var _sDashboardType = '';
var _bIsUserView = false;
var _bIsUserChart = false;
var oArgs;
var _loading = true;
var _bIsValid = true;
var _txtLabel = null;
var _txtDesc = null;
var _vizBox = null;
var _chkDispOption = null;
var _searchBox = null;
var _indexBox = null;
var _dataSource = null;
var _showChartsOnly = null;
var _defaultVizLabel = null;
var _showChartsOnlyLabel = null;
var _visualizationBoxLabel = null;

Sys.Application.add_load(OnSubGridWindowLoad);

function OnSubGridWindowLoad() {
oArgs = getDialogArguments();
_oFormXml = oArgs.FormXml;
_oFieldXml = oArgs.FieldsXml;
_oField = oArgs.Field;
_allEntities = oArgs.AllEntityData;
_relatedEntities = oArgs.RelEntitiesData;
_secCols = oArgs.SecCols;
_sSectionName = oArgs.sSectionName;
_sTabName = oArgs.sTabName;
_objectCode = parseInt(oArgs.ObjectTypeCode, 10);
_sEditorType = oArgs.EditorType;
_sDashboardType = oArgs.FormAccessType;
var oLabels = _oField.Labels;
_subGridId = _oField.Id;

_chkAutoExpanding = $get('chkAutoExpanding');
_txtLabel = $get('txtLabel');
_txtDesc = $get('txtDescription');
_chkDispOption = $get('chkDispOption');
_searchBox = $get('searchBox');
_indexBox = $get('indexBox');
_vizBox = $get('visualizationBox');
_dataSource = $get('DataSource');
_showChartsOnly = $get('showChartsOnly');
_isTeamTemplateSet = false;

_defaultVizLabel = $get('DefaultVizLabel');
_showChartsOnlyLabel = $get('showChartsOnlyLabel');
_visualizationBoxLabel = $get('visualizationBoxLabel');

_txtDesc.value = _subGridId;

if (!IsNull(oLabels) && !IsNull(oLabels.length) && oLabels.length > 0)
{
for( var i = 0; i < oLabels.length; i++)
{
if (!IsNull(oLabels[i]) && !IsNull(oLabels[i].LanguageCode)
&& !IsNull(USER_LANGUAGE_CODE) && oLabels[i].LanguageCode == USER_LANGUAGE_CODE && !IsNull(oLabels[i].Description))
{
_txtLabel.value = oLabels[i].Description;
}
}
}
_vizBox.checked = _oField.EnableChartPicker;
_chkAutoExpanding.checked = _oField.Auto;
_chkDispOption.checked = _oField.ShowLabel;
_searchBox.checked = _oField.EnableSearchBox;
_indexBox.checked = _oField.EnableIndex;
_bIsUserChart = _oField.IsUserChart;
_bIsUserView = _oField.IsUserView;
_bIsValid = true;

populateRecordsCombo();

populateEntityData();
_dataSource.innerHTML = "";
_allEntityHTML = _allEntitiesData.Render();
if (_objectCode == 0)
{
SetSelectHtml(_dataSource, _allEntityHTML);
}
else
{
_relEntityHTML = _relEntityData.Render();
SetSelectHtml(_dataSource, _relEntityHTML);
}

populateColumnLayout(_oField.ColSpan, _secCols);
CreateViewSelector(handleViewSelectionClick);
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(_oField.RowsPerPage);

var viewSelection = $get('viewSelection');
viewSelection.selectedIndex = _oField.EnableViewPicker;
if ((viewSelection.selectedIndex) && !isNullOrEmptyString(_oField.Views))
viewSelection.selectedIndex = 2;


if (_subGridId.length > 0) {
HandleUpdate();
_labelDirty = true;
}
else {
populateViewCombo();
populateVizCombo();
var dataSourceCombo = $get('DataSourceCombo');
_txtLabel.value = dataSourceCombo.options[dataSourceCombo.selectedIndex].text;
}
handleChartSelection();
HandleEditorType();


if (!_bIsValid){
DisableViewsAndCharts();
}
}

function DisableViewsAndCharts(){




$get('searchBox').disabled = true;
$get('indexBox').disabled = true;
$get('visualizationBox').disabled = true;
$get('showChartsOnly').disabled = true;


$get('editViewId').disabled = true;
$get('newViewId').disabled = true;


$get('RecCombo').disabled = true;
$get('DataSourceCombo').disabled = true;
$get('viewSelection').disabled = true;
}

function EnableDisableShowLabel() {
if (_sEditorType != 'dashboardEditor') {
if (_searchBox.checked || $get('viewSelection').selectedIndex) {
_chkDispOption.checked = true;
_chkDispOption.disabled = true;
$get('chkDispOptionLabel').disabled = true;
}
else {
_chkDispOption.disabled = false;
$get('chkDispOptionLabel').disabled = false;
}
}
else {
if (_showChartsOnly.checked || !$get('viewSelection').selectedIndex) {
_chkDispOption.checked = false;
_chkDispOption.disabled = true;
$get('chkDispOptionLabel').disabled = true;
_txtLabel.disabled = true;
}
else {
_chkDispOption.disabled = false;
$get('chkDispOptionLabel').disabled = false;
_txtLabel.disabled = false;
}
}
}
function HandleEditorType() {
switch (_sEditorType) {
case 'dashboardEditor':
$get('newViewTable').style.display = 'none';
break;
}
}
function HandleUpdate() {

switch (_oField.ChartGridMode)
{
case ALL:
_showChartsOnly.checked = false;
break;
case CHART:
_showChartsOnly.checked = true;
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(_oField.RowSpan);
break;
}


var oArgs = getDialogArguments();
if (oArgs.RelationShipExists) {
$get('RecCombo').options[0].selected = true;
_dataSource.innerHTML = _relEntityHTML;
}
else {
$get('RecCombo').options[1].selected = true;
_dataSource.innerHTML = _allEntityHTML;

}




var value = _oField.RelationshipName;




if (value == null || value.length == 0) {
value = _oField.TargetEntity;
}
/********************************************************************
DataSourceCombo.options[i].value is in following format
"EntityCode:LogicalName:RelationName:AssociationRoleOrdinal"
Hence Adding separator at start and end to uniquely identify
last selected value.
*********************************************************************/
value = ":" + value + ":";

var combo = $get('DataSourceCombo');
for (var i = 0; i < combo.options.length; i++) {
var val = combo.options[i].value;
if (val.indexOf(value) != -1) {
combo.options[i].selected = true;
populateViewCombo();
populateVizCombo();
break;
}

}


if (!$get('ViewComboSelector')){
_bIsValid = false;
return;
}


var defaultView = _oField.DefaultView;
var viewComboSelector = $get('ViewComboSelector');
for (var i = 0; i < viewComboSelector.options.length; i++) {
var val = viewComboSelector.options[i].value;
if (val.toUpperCase() === defaultView.toUpperCase()) {
viewComboSelector.options[i].selected = true;
break;
}

}
if (viewComboSelector.value == "{F79AD170-AE03-4F4C-8132-D4AA08520A0C}")
{
HandleRecordAccessTeamView();
$get("TeamTemplateRow").style.display = "";
}
ToggleViewSelection();
SetViewListValue(_oField.Views, $get('ViewListSelector'));


var defaultViz = _oField.VisualizationId;
var vizSelector = $get('visualizationList')
for (var i = 0; i < vizSelector.options.length; i++) {
var val = vizSelector.options[i].value;
if (val.toUpperCase() === defaultViz.toUpperCase()) {
vizSelector.options[i].selected = true;
break;
}

}

enableDisableViewButtons();
}


function SetSelectHtml(control, html) {
control.innerHTML = html;
crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, $get(control.firstChild.id));
}

function populateVizCombo() {

var combo = $get('DataSourceCombo');
var defaultVizElement = $get('DefaultViz');
if (combo.value != null) {
var value = combo.value.split(':');
if (value.length > 0) {
var chartsEnabled = true;
var isChartListEmpty = true;
if (!isNullOrEmptyString(defaultVizElement.innerHTML)) {
chartsEnabled = enableDisableChartButtons();
isChartListEmpty = false;
}
if (chartsEnabled || isChartListEmpty) {
var entityCode = parseInt(value[0], 10);

try {
var command = new RemoteCommand("FormEditorWebService", "GetVisualizationSelectorHtml");
command.SetParameter("entityCode", entityCode);
if (_sEditorType == 'dashboardEditor' && _sDashboardType == Mscrm.EntityTypeCode.UserForm) {
command.SetParameter("displayUserGroup", true);
command.SetParameter("retrieveOnlyPublished", true);
}
var result = command.Execute();
if (result.Success) {
var retVal = result.ReturnValue;
defaultVizElement.innerHTML = "";
defaultVizElement.innerHTML = retVal;
if (!isChartListEmpty) {
handleEmptyCharts();
}
_defaultViz = $get('visualizationList').value;
}
}
catch (e) {
}
}
if (isChartListEmpty) {
if (enableDisableChartButtons()) {
handleEmptyCharts();
}
}
}
}
}
function handleEmptyCharts() {
var visualizationList = $get('visualizationList');
var DefaultViz = $get('DefaultViz');
var emptyChartSelect = $get('emptyChartSelect');
if (visualizationList.length == 0) {
_showChartsOnlyLabel.disabled = true;
_showChartsOnly.disabled = true;
_showChartsOnly.checked = false;
_defaultVizLabel.disabled = true;
var emptyChartSelect = new Select();
emptyChartSelect.ID = 'visualizationList';
emptyChartSelect.AddOption(LOCID_FORMED_SUBGRID_NO_CHART, "");
DefaultViz.innerHTML = "";
emptyChartSelect.AddToControl(DefaultViz);
DefaultViz.disabled = true;
$get('visualizationList').disabled = true;

}
else {
_showChartsOnlyLabel.disabled = false;
_showChartsOnly.disabled = false;
_defaultVizLabel.disabled = false;
DefaultViz.disabled = false;
}
}

function populateViewCombo() {


if ($get('DataSourceCombo').value != null) {


var value = $get('DataSourceCombo').value.split(':');
if (value.length > 0) {

var entityCode = parseInt(value[0], 10);

try {
var command = new RemoteCommand("FormEditorWebService", "GetViewsHtml");
command.SetParameter("entityCode", entityCode);
if (_sEditorType == 'dashboardEditor' && _sDashboardType == Mscrm.EntityTypeCode.UserForm) {
command.SetParameter("displayUserGroup", true);
command.SetParameter("retrieveOnlyPublished", true);
}
var result = command.Execute();
if (result.Success) {
var retVal = result.ReturnValue;

ConstructViewCombo(retVal, 'ViewComboSelector', $get('DefaultView'), handleViewComboChange);


ConstructViewList(retVal, 'ViewListSelector', $get('viewSelection'), $get('ViewsAvailable'), handleViewListChange, $get('ViewComboSelector'));
}
}
catch (e) {
}
}
}
}

function onChangeDataSource() {
populateViewCombo();
populateVizCombo();
if (!_labelDirty) {
var DataSourceCombo = $get('DataSourceCombo');
_txtLabel.value = DataSourceCombo.options[DataSourceCombo.selectedIndex].text;
}
enableDisableViewButtons();
}

function enableDisableChartButtons() {
var value = $get('DataSourceCombo').value.split(':');
var DefaultViz = $get('DefaultViz');
var emptyChartSelect = $get('emptyChartSelect');
if (!IsNull(value[5]) && value[5].toLowerCase() == "false") {
DefaultViz.disabled = true;
_defaultVizLabel.disabled = true;
_showChartsOnly.checked = false;
_showChartsOnly.disabled = true;
_showChartsOnlyLabel.disabled = true;
_vizBox.checked = false;
_vizBox.disabled = true;
_visualizationBoxLabel.disabled = true;
if (!isNullOrEmptyString(DefaultViz.innerHTML)) {
var emptyChartSelect = new Select();
emptyChartSelect.ID = 'visualizationList';
emptyChartSelect.AddOption(LOCID_SUBGRID_CHART_DISABLED, "");
DefaultViz.innerHTML = "";
emptyChartSelect.AddToControl(DefaultViz);
}
return false;
}
else {
DefaultViz.disabled = false;
_defaultVizLabel.disabled = false;
_showChartsOnly.disabled = false;
_showChartsOnlyLabel.disabled = false;
_vizBox.disabled = false;
_visualizationBoxLabel.disabled = false;
return true;
}
}

function enableDisableViewButtons() {

var DataSourceCombo = $get('DataSourceCombo');
if (!IsNull(DataSourceCombo)) {
var value = DataSourceCombo.value.split(':');
if (!IsNull(value[4]) && value[4].toLowerCase() === "false") {
$get('editViewId').disabled = true;
$get('newViewId').disabled = true;
}
else {
$get('editViewId').disabled = false;
$get('newViewId').disabled = false;
}
}
}

function populateEntityData(sRecordType) {

_allEntitiesData = new Select();
_allEntitiesData.ID = "DataSourceCombo";
var optGroupAllEntity = new OptionGroup("", true, true, false);
optGroupAllEntity.Sorted = true;
optGroupAllEntity.Ascend = true;
_allEntitiesData.OnChange = "onChangeDataSource()";

_relEntityData = new Select();
_relEntityData.ID = "DataSourceCombo";
var optGroupRelEntity = new OptionGroup("", true, true, false);
optGroupRelEntity.Sorted = true;
optGroupRelEntity.Ascend = true;
_relEntityData.OnChange = "onChangeDataSource()";


var i, len, entityData;
var xmlDoc, dispName, entityInfo;

if (_allEntities != null) {
var allItems = normalizeArray(_allEntities.anyType);

len = allItems.length;
for (i = 0; i < len; i++) {
xmlDoc = XUI.Xml.LoadXml(allItems[i]);
dispName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/LocalizedName", null));
if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/LogicalName", null)) === Mscrm.InternalUtilities.EntityNames.SharePointDocument) {
continue;
}
entityInfo = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/EntityCode", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/LogicalName", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/RelationName", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/AssociationRoleOrdinal", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/IsCustomizable", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/IsEnabledForCharts", null));

optGroupAllEntity.AddOption(dispName, entityInfo);
}
}
_allEntitiesData.AddOptionGroup(optGroupAllEntity)

if (_relatedEntities != null) {
var relatedItems = normalizeArray(_relatedEntities.anyType);

len = relatedItems.length;
for (i = 0; i < len; i++) {
xmlDoc = XUI.Xml.LoadXml(relatedItems[i]);
dispName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/LocalizedName", null));
if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/LogicalName", null)) === Mscrm.InternalUtilities.EntityNames.SharePointDocument) {
continue;
}
entityInfo = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/EntityCode", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/LogicalName", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/RelationName", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/AssociationRoleOrdinal", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/IsCustomizable", null)) + ":" +
XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlDoc, "EntityInfo/IsEnabledForCharts", null));
optGroupRelEntity.AddOption(dispName, entityInfo);
}
}
_relEntityData.AddOptionGroup(optGroupRelEntity);
}







function normalizeArray(oResult) {
if (IsNull(oResult)) {
return null;
}

return isArray(oResult) ? oResult : new Array(oResult);
}

function populateRecordsCombo() {
var SelectRecs = new Select();
SelectRecs.OnChange = "onRecordChange()";
SelectRecs.ID = "RecCombo";

SelectRecs.AddOption(LOCID_FORMED_SUBGRIDRELATEDRECS, 1);
SelectRecs.AddOption(LOCID_FORMED_SUBGRIDALLRECS, 2);
SelectRecs.AddToControl($get('Records'));
if (_objectCode == 0) {
var recordControl = Mscrm.FormControlInputBehavior.GetBehavior("RecCombo");
recordControl.set_disabled(true);
recordControl.set_selectedIndex(1);
}
}

function onRecordChange() {
var recordControl = Mscrm.FormControlInputBehavior.GetBehavior("RecCombo");
if (recordControl.get_dataValue() === '1') {
_dataSource.innerHTML = "";
_dataSource.innerHTML = _relEntityHTML;
}
else {
_dataSource.innerHTML = "";
_dataSource.innerHTML = _allEntityHTML;
}
onChangeDataSource();
}

function IsUserViewType()
{
var viewSelector = $get('ViewComboSelector');
if (!IsNull(viewSelector) && viewSelector.selectedIndex != -1)
{
return parseInt(viewSelector.options[viewSelector.selectedIndex].getAttribute("Type"), 10) == Mscrm.EntityTypeCode.UserQuery;
}
return false;
}
function IsUserVizType()
{
var visualizationList = $get('visualizationList');
if (!IsNull(visualizationList) && visualizationList.selectedIndex != -1)
{
return parseInt(visualizationList.options[visualizationList.selectedIndex].getAttribute("type"), 10) == Mscrm.EntityTypeCode.UserQueryVisualization;
}
return false;
}
function populateGridRows() {
var SelectRows = new Select();
SelectRows.ID = "GridRowsCombo";
var selValue = 1;
if (_oField.RowSpan != null)
selValue = _oField.RowSpan;
SelectRows.Selected = selValue;
var i;
for (i = 1; i <= 4; i++) {
SelectRows.AddOption(i.toString(), i.toString());
}
SelectRows.AddToControl(GridRows);
}
function handleViewSelectionClick() {
EnableDisableShowLabel();
ToggleViewSelection($get('viewSelection'));
}

function applychanges() {

if (_txtDesc.value.length == 0) {
alert(LOCID_ENTER_SUBGRID_NAME);
_txtDesc.select();
return;
}
if (_txtLabel.value.length == 0) {
alert(LOCID_ENTER_SUBGRID_LABEL);
_txtLabel.select();
return;
}


if (!IsIdValid(_txtDesc.value) || _txtDesc.value.startsWith("_") || !isNaN(_txtDesc.value.substring(0, 1))) {
alert(LOCID_ALPHANUMERIC_ONLY);
_txtDesc.select();
return;
}


if (_subGridId != _txtDesc.value) {
var oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.subgrid + "']", null);
var iLen = oNodes.length;
for (var i = 0; i < iLen; i++) {
if (oNodes[i].getAttribute("id") === _txtDesc.value) {
alert(LOCID_SUBGRID_EXISTS);
_txtDesc.select();
return;
}
}
}

var subGridId = _txtDesc.value;

var sRelationShipName, sTargetEntityName, sAssociationRoleOrdinal = "", viewID, viewIds;
var sVisualizationId = "";
var viewIds;


if (!_bIsValid){
sTargetEntityName = _oField.TargetEntity;
sRelationShipName = _oField.RelationshipName;
sAssociationRoleOrdinal = _oField.AssociationRoleOrdinal;
viewIds = _oField.Views;
viewID = _oField.DefaultView;
sVisualizationId = _oField.VisualizationId;
}
else{

var value = $get('DataSourceCombo').value.split(':');
sTargetEntityName = value[1];

viewIds = getViewsSelected($get('ViewListSelector'));

if (value.length > 2)
sRelationShipName = value[2];

sAssociationRoleOrdinal = value[3];
viewID = $get('ViewComboSelector').value;
sVisualizationId = $get('visualizationList').value;
}

var gridColSpan = getGridColSpan();
if (gridColSpan > _secCols) {
alert(LOCID_FORMED_SUBGRID_COLSPAN);
return;
}

var visSel = _vizBox.checked;
if (_vizBox.style.display === "none")
visSel = false;

var viewSel = $get('viewSelection').selectedIndex ? "true" : "false";
if ($get('viewSelection').style.display === "none")
visSel = false;

var searchSel = _searchBox.checked;
if (_searchBox.style.display === "none")
visSel = false;

var indexSel = _indexBox.checked;
if (_indexBox.style.display === "none")
visSel = false;

var bAutoExpanding = Mscrm.FormControlInputBehavior.GetBehavior('chkAutoExpanding').get_dataValue();
if (bAutoExpanding) {
bAutoExpanding = AutoExpandingRequired(_sTabName, subGridId, _oFormXml);
_chkAutoExpanding.checked = bAutoExpanding;
}

var gridMode = GRID;
if (_showChartsOnly.checked)
gridMode = CHART;
if (_vizBox.checked)
gridMode = ALL;
if (_showChartsOnly.checked && _vizBox.checked)
gridMode = CHART;
if (_bIsValid){
_bIsUserView = IsUserViewType().toString();
_bIsUserChart = IsUserVizType().toString();

}

var rowSpan, recordsPerPage;

if (_sEditorType !== 'dashboardEditor')
{
recordsPerPage = Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue();
rowSpan = calculateRowSpan();
}
else
{
var oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" + _subGridId + "']", null);
rowSpan = oNodes[0].getAttribute('rowspan');
recordsPerPage = GetRecordsPerPage(getGutter(), rowSpan);
}
var subGrid = new SubGridObj(
subGridId,
sRelationShipName,
sTargetEntityName,
rowSpan,
recordsPerPage,
gridColSpan,
bAutoExpanding,
_chkDispOption.checked,
viewID,
viewSel,
viewIds,
searchSel,
indexSel,
gridMode,
sVisualizationId,
visSel,
new Array(new LocalizedObj(_txtLabel.value, oArgs.LangCode)),
sAssociationRoleOrdinal,
_bIsUserView,
_bIsUserChart
);
if (_isTeamTemplateSet)
{
subGrid.TeamTemplateId = $get('TeamTemplateSelect').value;
}
Mscrm.Utilities.setReturnValue(subGrid);
closeWindow();
}

function handleChartSelection() {
if (_showChartsOnly.checked) {
_chkAutoExpanding.checked = false;
_chkAutoExpanding.disabled = true;
_indexBox.disabled = true;
_searchBox.disabled = true;
$get('disableAutoExpandingMessage').style.display = "inline";
}
else
{
_indexBox.disabled = false;
_searchBox.disabled = false;
_chkAutoExpanding.disabled = false;
$get('disableAutoExpandingMessage').style.display = "none";
}
EnableDisableShowLabel();
}
function calculateRowSpan() {
if (_chkAutoExpanding.checked) {
return 2 + getGutter();
}
else
return Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue() + getGutter();
}
function getGutter()
{
var gutter = GetGutterValue(_showChartsOnly.checked, $get('viewSelection').selectedIndex, _searchBox.checked, _chkDispOption.checked, _indexBox.checked, (_sEditorType === 'dashboardEditor'));
return gutter;
}
function getGridColSpan()
{
var colSpan = 1;
if ($get('rdColumnSpan2').checked)
colSpan = 2;
if ($get('rdColumnSpan3').checked)
colSpan = 3;
if ($get('rdColumnSpan4').checked)
colSpan = 4;

return colSpan;
}

function createView() {
var objectCode = $get('DataSourceCombo').value.split(':')[0];
var entityId = GetEntityId(objectCode);
if (entityId != null && objectCode != null) {
var url = Mscrm.CrmUri.create(formatString("/tools/vieweditor/viewManager.aspx?objectTypeCode={0}&mode=new&entityId={1}", CrmEncodeDecode.CrmUrlEncode(objectCode), CrmEncodeDecode.CrmUrlEncode(entityId)));
_viewWindow = openStdWin(url, buildWinName(), _oConst.iAttributeEditorWidth, _oConst.iAttributeEditorHeight);
}
}

function editView() {
var objectCode = $get('DataSourceCombo').value.split(':')[0];
var entityId = GetEntityId(objectCode);
var viewId = $get('ViewComboSelector').value;

if (entityId != null && objectCode != null && viewId != null) {
var url = Mscrm.CrmUri.create(formatString("/tools/vieweditor/viewManager.aspx?id={0}&entityId={1}", CrmEncodeDecode.CrmUrlEncode(viewId), CrmEncodeDecode.CrmUrlEncode(entityId)));
_viewWindow = openStdWin(url, buildWinName(), _oConst.iAttributeEditorWidth, _oConst.iAttributeEditorHeight);
}

}

function GetEntityId(objectCode) {
var entityId = null;
try {
var command = new RemoteCommand("FormEditorWebService", "GetEntityId");
command.SetParameter("entityCode", objectCode);
var result = command.Execute();
if (result.Success) {
entityId = result.ReturnValue;

}
}
catch (e) {
}

return entityId;
}

function RefreshComboIfRequired() {
try {
if (_viewWindow != null && _viewWindow.closed) {
populateViewCombo();
_viewWindow = null;
}
} catch (e) {
populateViewCombo();
_viewWindow = null;

}
}

function handleRowCountChange() {
var btnOk = $get('butBegin');
if (!IsNull(btnOk))
{
btnOk.disabled = false;
if (IsNull(Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue())) {
btnOk.disabled = true;
}
}
}
</script>

<style>
div.ms-crm-Tab
{
border-top-style:solid;
border-top-width:1px;
width:auto;
}
</style>
</head>
<body onmouseover="RefreshComboIfRequired();">
<frm:DialogForm id="crmForm" runat="server">

<div style="width:100%; min-width:390px;">
<div class="formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">

<div id="tab0" class="ms-crm-Tab" style="display: inline;">

<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_195" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30" /><col width="70" />
<tr>
<td class="ms-crm-Field-Required" id="name_c"><label for="txtDescription"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_200" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtDescription" MaxLength="255" runat="server"/></td>
</tr>
</table>
</fieldset>
<br />


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col width="70"/>
<tr>
<td class="ms-crm-Field-Required" id="label_c"><label for="txtLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><input  type="text" id="txtLabel" onkeypress="_labelDirty = true;" maxlength="255" class="ms-crm-Text" /></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="chkDispOption" runat="server"/></td>
<td ><label for="chkDispOption" id="chkDispOptionLabel" runat="server"></label></td>
</tr>

</table>
</fieldset>

<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.DataSourceLegend" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.DataSourceDescription" runat="server"/>
</div>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30%" /><col width="70%" />
<tr>
<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.RecordsLabel" runat="server"/></label></td>
<td id="Records"></td>
</tr>
<tr>
<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.DataSource" runat="server"/></label></td>
<td id="DataSource"></td>
</tr>
<tr>
<td><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.DefaultView" runat="server"/></label></td>
<td id="DefaultView"></td>
</tr>
<tr id="TeamTemplateRow" style="display:none">
<td><label><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.TeamTemplateView" runat="server" /></label></td>
<td id="TeamTemplateCell"></td>
<td id="TeamTemplateErrorCell" style="display:none"><label><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.NoTeamTemplateErrorMessage" runat="server" /></label></td>
</tr>
</table>

<table id="newViewTable" cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="40%"/><col width="25%"/><col width="25%"/><col width="10%"/>
<tr>
<td/>
<td><ui:Button id="editViewId" class="ms-crm-RefreshDialog-Button" onclick="editView();" ResourceId="Edit_View_From_SubGrid" runat="server"/></ui:Button></td>
<td><ui:Button id="newViewId" class="ms-crm-RefreshDialog-Button" onclick="createView();" ResourceId="New_View_From_SubGrid" runat="server"/></ui:Button></td>
<td/>
</tr>
</table>
</fieldset>


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.AdditionalOptionLegend" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="10%" /><col width="20%" /><col width="70%" />

<tr>
<td><ui:CheckBox id="searchBox" onclick="EnableDisableShowLabel();" runat="server"/></td>
<td colspan='2'><label for="searchBox" id="searchBoxLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.SearchBox" runat="server"/></label></td>
</tr>

<tr>
<td><ui:CheckBox id="indexBox" runat="server"/></td>
<td colspan='2'><label for="indexBox" id="indexBoxLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.Index" runat="server"/></label>&nbsp;<img alt="" src="/_imgs/error/notif_icn_info16.png" title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ProcessForm.FormEditor.Warning.ToolTip")) %>"/></td>
</tr>

<tr>
<td colspan='2'><label id="viewSelectionLabel"><loc:Text ResourceId="Web.DashboardEditor.ViewSelectorLabel" runat="server"/>&nbsp;</label></td>
<td id="tdViewSelector"></td>
</tr>
<tr>
<td colspan="3" id="ViewsAvailable"></td>
</tr>
</table>
</fieldset>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.ChartOptionLegend" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="10%" /><col width="20%" /><col width="70%" />
<tr>
<td colspan='2'><label for="DefaultViz" id="DefaultVizLabel" ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.DefaultChart" runat="server"/></label></td>
<td  id="DefaultViz"></td>
</tr>

<tr>
<td><ui:CheckBox id="showChartsOnly" onclick="handleChartSelection();" runat="server"/></td>
<td colspan='2'><label for="showChartsOnly" id="showChartsOnlyLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.DisplayChartOnly" runat="server"/></label></td>
</tr>

<tr>
<td><ui:CheckBox id="visualizationBox" onclick="handleChartSelection();" runat="server"/></td>
<td colspan='2'><label for="visualizationBox" id="visualizationBoxLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.DisplayVisualization" runat="server"/></label></td>
</tr>
</table>

</fieldset>

</div>

<div id="tab1" class="ms-crm-Tab">
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_197" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col/><col width="85" class="fieldprops_col_3"/>

<tr>
<td colspan="3"><loc:Text ResourceId="FormEditor_Dialogs_ColSpan_Label" runat="server"/></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan1" type="radio" class="radio"></td>
<td><label id="rdColumnSpan1Label" for="rdColumnSpan1"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan2" type="radio" class="radio"></td>
<td><label id="rdColumnSpan2Label" for="rdColumnSpan2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="2">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example" colspan="2">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan3" type="radio" class="radio"></td>
<td><label id="rdColumnSpan3Label" for="rdColumnSpan3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_206" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="2">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="3">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan4" type="radio" class="radio"></td>
<td><label id="rdColumnSpan4Label" for="rdColumnSpan4"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_207" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="2">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="3">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="4">&nbsp;</td>
</tr>
</table></td>
</tr>
</table>
</fieldset>

<br>
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.RowLegend" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="105"><col>

<tr>
<td colspan="3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.RowsLegend.Description" runat="server"/></td>
</tr>

<tr>
<td colspan="2"><label for="RowCount"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server"/></label></td>
<td><ui:Number id="RowCount" runat="server"/></td>
</tr>

<tr id="trAutoExpanding" >
<td><ui:CheckBox id="chkAutoExpanding" runat="server"/></td>
<td colspan="2"><label id="chkAutoExpandingLabel" for="chkAutoExpanding"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_245" runat="server"/></label></td>
</tr>
</table>
<table id ="disableAutoExpandingMessage" style="display:none" cellpadding="0" width="100%" style="table-layout: fixed;">
<col width="25"><col>
<tr>
<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
<td><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.disabledAutoExpanding" runat="server"/></td>
</tr>
</table>

</fieldset>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
