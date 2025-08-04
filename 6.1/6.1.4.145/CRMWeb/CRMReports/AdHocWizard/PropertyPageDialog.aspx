







<%@ page language="c#" inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.PropertyPageDialog" %>
<%@ register tagprefix="cnt" namespace="Microsoft.Crm.Application.Controls" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="crm" namespace="Microsoft.Crm.Application.Components.UI" assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ register tagprefix="sdk" namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ register tagprefix="loc" namespace="Microsoft.Crm.Application.Controls.Localization" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">


var _iEditMode;
var _iObjectType;
var _oaFieldExclusionList;
var columnComponent;
var timeIntervalComponent;
var summaryValueComponent;
var widthComponent;
var sortOrderComponent;
var entityBehavior;
var columnBehavior;
var addRawValueToColumn;




function applychanges()
{

var oReturnValue = new Object();




var oSelectedEntity = entityComponent.get_selectedOption();
var oEntity = new Object();
oEntity.Alias = (entityComponent.get_dataValue() == oSelectedEntity.getAttribute("entity")) ? "" : entityComponent.get_dataValue();
oEntity.Name = oSelectedEntity.getAttribute("entity");
if (oSelectedEntity.parentNode.tagName == "OPTGROUP")
{


oEntity.ParentEntity = (oSelectedEntity.parentNode.getAttribute("alias") == oSelectedEntity.parentNode.getAttribute("entity")) ? "" : oSelectedEntity.parentNode.getAttribute("alias");

oEntity.From = oSelectedEntity.getAttribute("from");
oEntity.To = oSelectedEntity.getAttribute("to");


if (!IsNull(oEntity.Alias) && oEntity.Alias.length > 0)
{
oEntity.EntityAlias = oEntity.Alias;
oEntity.Alias = "LE_" + GetUniqueId();
}
}
oReturnValue.Entity = oEntity;


oReturnValue.Attribute = columnComponent.get_dataValue();


var sAttributeDisplayName = columnComponent.get_selectedText();
if (!IsNull(oSelectedEntity.getAttribute("attributedisplayname")))
{
sAttributeDisplayName = formatString(LOCID_ATTRIBUTE_TITLE_FORMAT, sAttributeDisplayName, oSelectedEntity.getAttribute("attributedisplayname"));
}
oReturnValue.DisplayName = sAttributeDisplayName;


if (_iObjectType == PROPERTY_PAGE_TYPE_GROUP)
{
if (!timeIntervalComponent.get_disabled())
{
oReturnValue.TimeInterval = timeIntervalComponent.get_dataValue();
}

oReturnValue.SortOrder = sortOrderComponent.get_dataValue();
}

oReturnValue.Width = widthComponent.get_dataValue();
oReturnValue.SummaryValue = (summaryValueComponent.get_disabled()) ? null : summaryValueComponent.get_dataValue();
oReturnValue.AddRawValueColumn = addRawValueToColumn ;


closeDialog(oReturnValue);
}

function GetUniqueId()
{

var randomAlias = Mscrm.Utilities.createGuid();
randomAlias = randomAlias.replace('{', '');
randomAlias = randomAlias.replace('}', '');
while (randomAlias.indexOf('-') >= 0)
{
randomAlias = randomAlias.replace('-', '');
}
return randomAlias;
}




function cancel()
{
closeDialog(new Object());
}




function closeDialog(oReturnValue)
{

oReturnValue.Cache = entityBehavior.get_cacheManager();


Mscrm.Utilities.setReturnValue(oReturnValue);
closeWindow();
}




function initializePage()
{
columnComponent = Mscrm.FormControlInputBehavior.GetBehavior('column');
entityComponent = Mscrm.FormControlInputBehavior.GetBehavior('entity');
timeIntervalComponent = Mscrm.FormControlInputBehavior.GetBehavior('timeInterval');
widthComponent = Mscrm.FormControlInputBehavior.GetBehavior('width');
sortOrderComponent = Mscrm.FormControlInputBehavior.GetBehavior('sortOrder');
summaryValueComponent = Mscrm.FormControlInputBehavior.GetBehavior('summaryValue');



var oArgs = getDialogArguments();
if (_iEditMode == EDIT_MODE_UPDATE && !IsNull(oArgs.Entity))
{
entityComponent.set_dataValue(oArgs.Entity);
}

updateColumns();


if (_iEditMode == EDIT_MODE_UPDATE)
{

columnComponent.set_dataValue(oArgs.Attribute);
updateColumn();


var sTimeInterval = oArgs.TimeInterval;
if (!IsNull(sTimeInterval))
{
timeIntervalComponent.set_dataValue(sTimeInterval);
}


sortOrderComponent.set_dataValue(oArgs.SortOrder);


widthComponent.set_dataValue(oArgs.Width);


summaryValueComponent.set_dataValue(oArgs.SummaryValue);


addRawValueToColumn = oArgs.AddRawValueColumn;


entityComponent.set_disabled(true);
$get('entity').style.display = "none";
var oEntitySpan = document.createElement("span");
XUI.Html.SetText(oEntitySpan, Mscrm.FormControlInputBehavior.GetBehavior('entity').get_selectedText());
$get('entity_d').appendChild(oEntitySpan);

columnComponent.set_disabled(true);
$get('column').style.display = "none";
var oColumnSpan = document.createElement("span");
XUI.Html.SetText(oColumnSpan, Mscrm.FormControlInputBehavior.GetBehavior('column').get_selectedText());
$get('column_d').appendChild(oColumnSpan);
}
}




Sys.Application.add_load(function () {
var oCache = null;

var oArgs = getDialogArguments();
with (oArgs) {
oCache = Cache;
_iEditMode = EditMode;
_iObjectType = ObjectType;
_oaFieldExclusionList = FieldExclusionList;
}


entityBehavior = Mscrm.CrmUIBehavior.getBehaviorByName($get('entity'), "EntitySelect");
entityBehavior.set_cacheManager(oCache);

columnBehavior = Mscrm.CrmUIBehavior.getBehaviorByName($get('column'), "SetOptionsSelect");

if (_iObjectType == PROPERTY_PAGE_TYPE_GROUP) {
addRawValueToColumn = null;
}


initializePage();


});




function updateColumn()
{

var oColumnOption = columnComponent.get_selectedOption();
if (!IsNull(oColumnOption))
{

var sDataType = oColumnOption.getAttribute('datatype');
XUI.Html.SetText($get('dataType'), GetTypeLocalizedName(sDataType));
XUI.Html.SetText($get('schemaName'), oColumnOption.value);


if (_iObjectType == PROPERTY_PAGE_TYPE_GROUP)
{
timeIntervalComponent.set_disabled(sDataType != "datetime");
}



if (_iObjectType == PROPERTY_PAGE_TYPE_COLUMN)
{

var bValidForSummary = isNumericDataType(sDataType);
if (!bValidForSummary)
{
summaryValueComponent.set_dataValue(null);
}
summaryValueComponent.set_disabled(!bValidForSummary);
}


sortOrderComponent.set_disabled(_iObjectType == PROPERTY_PAGE_TYPE_COLUMN);
widthComponent.set_disabled(false);
SetAddRawValueToColumn(sDataType, _iObjectType);
}
else
{

widthComponent.set_disabled(true);
summaryValueComponent.set_disabled(true);
SetAddRawValueToColumn("", _iObjectType);

if (_iObjectType == PROPERTY_PAGE_TYPE_GROUP)
{
timeIntervalComponent.set_disabled(true);
sortOrderComponent.set_disabled(true);
}


XUI.Html.SetText($get('dataType'), "");
XUI.Html.SetText($get('schemaName'), "");
}


$get('butBegin').disabled = IsNull(oColumnOption);

}





function SetAddRawValueToColumn(sDataType, iObjectType) {
if (iObjectType != PROPERTY_PAGE_TYPE_COLUMN) {
return;
}
if (sDataType != "decimal" && sDataType != "float" &&
sDataType != "int" && sDataType != "money" && sDataType != "date" && sDataType != "datetime") {
addRawValueToColumn = null;
}
else {
addRawValueToColumn = true;
}
}





function GetTypeLocalizedName(type) {
var localizedName = DataTypeMapInfo[type];
if (!isNullOrEmptyString(localizedName)) {
return localizedName;
}
return type;
}




function updateColumns()
{

columnComponent.set_disabled(true);


var sOptions = entityBehavior.getEntityFieldOptions();
var sNewInnerHtml = IsNull(sOptions) ? "" : sOptions;


columnBehavior.setOptions(sNewInnerHtml);


columnComponent = Mscrm.FormControlInputBehavior.GetBehavior('column');


var sAttributeName;
var sEntityAlias = (entityComponent.get_dataValue() == entityComponent.get_selectedOption().getAttribute("entity")) ? "" : entityComponent.get_dataValue();
for (sAttributeName in _oaFieldExclusionList[sEntityAlias])
{
if (!IsNull(_oaFieldExclusionList[sEntityAlias][sAttributeName]))
{
columnComponent.RemoveOption(sAttributeName);
}
}


var sDefaultColumn = columnComponent.get_dataValue();
columnComponent.set_dataValue(entityComponent.get_selectedOption().getAttribute("primaryfield"));
if (IsNull(columnComponent.get_dataValue()))
{


columnComponent.set_dataValue(sDefaultColumn);
}


columnComponent.set_disabled(false);


updateColumn();
}
</script>
<style type="text/css">
DIV.RawValueStyle
{
width:100%;
}
</style>
</head>
<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="5" width="100%" style="padding: 5px; table-layout: fixed;">
<col width="150" />
<col />
<tr>
<frm:FormCell runat="server" id="entityCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.RecordType" ShowLabel="True" RequiredLevel="Required"><ui:Select id="entity" runat="server" OnChange="updateColumns()" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="columnCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.Column" ShowLabel="True" RequiredLevel="Required"><ui:Select id="column" runat="server" OnChange="updateColumn()" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="timeIntervalCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.Interval"><ui:Select id="timeInterval" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="dataTypeCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.DataType" ShowLabel="True"><ui:LabelUI id="dataType" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="schemaNameCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.SchemaName" ShowLabel="True"><ui:LabelUI id="schemaName" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="sortOrderCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.SortOrder" ShowLabel="True"><ui:Select id="sortOrder" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="widthCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.Width" ShowLabel="True" RequiredLevel="Required"><ui:Select id="width" runat="server" /></frm:FormCell>
</tr>
<tr>
<frm:FormCell runat="server" id="summaryValueCell" LabelResourceId="CustomReporting.AdHocWizard.PropertyPageDialog.SummaryValue" ShowLabel="True"><ui:Select id="summaryValue" runat="server" /></frm:FormCell>
</tr>

<tr>
<td colspan="2">&nbsp;</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
