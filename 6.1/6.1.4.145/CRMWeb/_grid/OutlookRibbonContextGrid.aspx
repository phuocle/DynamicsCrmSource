<!DOCTYPE html>


<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Grids.OutlookRibbonContextGrid" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<html style="overflow:hidden">
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript">

function ClearGridSelectionCache()
{
var gridControl = $find("crmGrid");
gridControl.clearSelectionCache();


var ribbonData = $find("crmRibbonData");
ribbonData.handleEvent("SelectionChanged", null, gridControl);
return true;
}

function ConfirmViewChange() {
var visualizationPane = $find("crmGrid_paneControl");
if (visualizationPane)
return visualizationPane.confirmViewChange();
else
return true;
}

function RaiseEvent(eventCode, parametersJson)
{
var eventManager = $find("crmEventManager");

var parameters = {};
if (parametersJson)
parameters = Sys.Serialization.JavaScriptSerializer.deserialize(parametersJson);

if (eventManager != null)
eventManager.raiseEvent(eventCode, parameters, $find("crmGrid"));
}

function RefreshVisualizationPane() {
window.setTimeout(Function.createDelegate(this, function () {
var visualizationPane = $find("crmGrid_paneControl");
if (visualizationPane)
visualizationPane.refreshVisualizationPane();
}), 0);
}

function InitializeFilterPopup(id, ajaxFilterComponent, filterPopupXml) {

var filterDiv = document.createElement("div");
filterDiv.setAttribute("id", id);
filterDiv.setAttribute("gridid", "crmGrid");

$get("filterPopupCollection").appendChild(filterDiv);

var gridControl = $find("crmGrid");
var attributeDictionary = Sys.Serialization.JavaScriptSerializer.deserialize(filterPopupXml);

for (var key in attributeDictionary)
filterDiv.setAttribute(key, CrmEncodeDecode.CrmHtmlDecode(attributeDictionary[key]));

crmCreate(eval(ajaxFilterComponent), {}, null, null, filterDiv);

return $find(id);
}

function ShowCustomFilterDialog(id) {
var filterPopup = $find(id);
var filterChanged = filterPopup.handleCustomFiltersClick();
var filterSet = $find("crmGrid_filterSet");
if (filterChanged && filterSet)
filterSet.ApplyFilters();
return filterChanged;
}

function DescribeFilter(id) {
var filterPopup = $find(id);
if (filterPopup)
return filterPopup.describe();
}

function ClearFilter(id) {
var filterPopup = $find(id);
if (filterPopup) {
filterPopup.ClearFilterConditions(true, false);

var filterSet = $find("crmGrid_filterSet");
if (filterSet)
filterSet.ApplyFilters();
}
}

function IsFilterComplex(id) {
var filterPopupElement = $get(id);
if (IsNull(filterPopupElement)) {
return false;
}
return filterPopupElement["iscomplexfilter"];
}

function ClearAllFilters(idListString) {
var idList = Sys.Serialization.JavaScriptSerializer.deserialize(idListString);
var filterPopupCollection = $get("filterPopupCollection");
for (var index in idList) {
var childControl = $get(idList[index]);
if (childControl)
filterPopupCollection.removeChild(childControl);
}


var filterSet = $find("crmGrid_filterSet");
if (filterSet)
filterSet.clearPopups();
}

function EnableFilters() {
var filterSet = $find("crmGrid_filterSet");


if (filterSet && filterSet.CanEnableFilters()) {
filterSet.EnableFilters();
}
}

function EnableSingleFilter(id) {
var filterSet = $find("crmGrid_filterSet");
var filterPopupElement = $get(id);
var filterPopup = $find(id);


if (filterSet && filterPopupElement && filterPopup && filterSet.CanEnableFilters()) {


filterSet.SetMenuFilterConditions(filterPopup, filterPopupElement, null);
filterPopup.onEnable()
}
}

function IsFilterSetDirty(idListString) {
var filterSet = $find("crmGrid_filterSet");
if (!filterSet || !filterSet.IsFilterEnabled()) {
return false;
}

if (filterSet.get_isFilterOnHiddenCol()) {
return true;
}

var idList = Sys.Serialization.JavaScriptSerializer.deserialize(idListString);
var filterPopupCollection = $get("filterPopupCollection");
var isDirty = false;
for (var index in idList) {
var childControl = $find(idList[index]);
if (!childControl || !childControl.get_isFilterPopUpDirty()) {
continue;
}
isDirty = true;
break;
}
return isDirty;
}
</script>
</head>
<body style="overflow:auto;height:100%">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<cnt:NavigationManager runat="server" id="crmNavigationManager"></cnt:NavigationManager>
<div id="crmGrid"></div>
<script type="text/javascript" language="javascript">

crmGrid.GetParameter = function (name)
{
var gridControl = $find("crmGrid");
return gridControl.GetParameter(name);
}

crmGrid.SetParameter = function (name, value)
{
var gridControl = $find("crmGrid");
return gridControl.SetParameter(name, value);
}

crmGrid.GetProperty = function (name)
{
var gridControl = $find("crmGrid");
return gridControl.GetProperty(name);
}

</script>
<div id="gridVisualization" runat="server" style="height:100%" />
<div id="filterPopupCollection" />

<iframe id="exportChartIframe" name="exportChartIframe" style="display:none" src="/_static/blank.htm"/>

</body>
</html>
