<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Pages.MultiEntitySearchPage" EnableEventValidation="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html xmlns:crm>
<head>
<meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8" />
<link rel="stylesheet" href="/_common/styles/menucore.css.aspx">
<title></title>
<style>
#searchDiagolue li.selected {
background-color: #B1D6F0 !important;
border-color: #B1D6F0 !important;
}

#searchDiagolue li:hover {
background-color: #eaf4fb;
border-color: #eaf4fb;;
}

crmntfcoverride {
width: 100%;
height: 24px;
display: inline-block;
cursor: default;
}

.catogerySearchOptionsDiv {
<% if(Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) {%>
width: 150px !important;
<% } else { %>
width: 120px !important;
<% } %>
}
</style>
<cnt:AppHeader id="crmHeader" runat="server" />

<script src="/_static/_common/scripts/jsrender.min.js"></script>
<script id="contentTemplate" type="text/x-jsrender">
<div id="entityDiv_{{:_entityTypeCode}}" class="panoramaItem panoramaItemMargin meqfpanoramaItem meqfTabBorder panoramaItemMarginDisplay">
<div class="panoramaItem-content panoramaItem-contentMargin" tabindex="-1">
<div class="component">
<div id="entitypic" class="listRoot {{:_entityLogicalName}} panoramaItem-control">
<div class="listHeader">
<div class="listComponentView-interactBar listItemMarginDisplay">
<span style="display: none;" id="entityLogicalName">
{{:_entityLogicalName}}
</span>
<span style="display: none;" id="entityTypeCode">
{{:_entityTypeCode}}
</span>
<span style="display: none;" id="isQuickCreateEnabled">
{{:_isQuickCreateEnabled}}
</span>
<span style="display: none;" id="isNewEnabled">
{{:_isNewEnabled}}
</span>
<span style="display: none;" id="isRefreshEnabled">
{{:_isRefreshEnabled}}
</span>
<span style="display: none;" id="hasLocalizedAttributes">
{{:_hasLocalizedAttributes}}
</span>
<div class="meqfListViewName listViewName meqfListViewNameMargin" id="entityName" title="{{:_entityDisplayName}}">
{{:_entityDisplayName}}
</div>
<button id="newRecord_{{:_entityLogicalName}}" class="meqfNewRecord" role="button" type="button" style="background-image: none;">
<span>
<img id="newRecord_{{:_entityLogicalName}}_img" class="globalCreateButtonImage"/>
</span>
</button>
</div>
</div>
<div class="scrollRegion scrollingElement meqfVerticalScroll" id ="scrollbarRegion_{{:_entityLogicalName}}" >
<div class="group" style="display: none;"></div>
<div class="listView" id="69_ListView">
<div class="SimpleListView">
{{for _records}}
<span style="display: none;" id="entityRecordTypeCode">
{{:_recordEntityTypeCode}}
</span>
<span style="display: none;" id="entityId">
{{:_id}}
</span>
<span style="display: none;" id="entityColor">
{{:_recordEntityColor}}
</span>
<div class="listItem listItemMargin" tabindex="0" id="Record_{{:_recordEntityTypeCode}}_{{:_id}}" title="{{:_attribute1}}">
<div class="section listItem_section image_enabled_meqf listItemMargin listItemMarginDisplay">
<div class="section_control noLabel section_controlMargin">
<div class="control_value">
{{if _entityImage != ""}}
<img style="width: 46px; height: 46px;" src="{{:_entityImage}}" alt="Profile Picture"></img>
{{else}}
<div class="meqfTile" style="background-color: {{:_recordEntityTheme}};">
<div style="height:4px;"></div>
<img src="{{:_recordEntitySymbol}}"></img>
</div>
{{/if}}
</div>
</div>
<div class="section_control_meqf noLabel">
<div class="control_value attributePrimary" style="max-height:49px;">
<span id="attribone" style="word-wrap:break-word;width:200px;white-space:normal;">{{:_attribute1}}</span>
</div>
</div>
<div class="section_control_meqf noLabel attributeOther" style="width: 150px;">
<div class="control_value">
<span id="attribtwo" style="max-width:150px;">{{:_attribute2}}</span>
</div>
</div>
<div class="section_control_meqf noLabel attributeOther" style="width: 150px;">
<div class="control_value">
<span id="attribthree" style="max-width:150px;">{{:_attribute3}}</span>
</div>
</div>
<div style="clear: both;"></div>
</div>
</div>
{{/for}}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</script>
<script id="errorTemplate" type="text/x-jquery-tmpl">
<div class="panoramaItem meqfpanoramaItem" style="width: 310px; height: 322px;" data-panetype="GeneralPane" data-panename="searchSummaryPane" data-id="PaneHeader">
<div class="panoramaItem-title meqfpanoramaitem-title">
<div tabindex="-1" class="errorIndicator" style="display: none;"></div>
<div class="panoramaItem-title-text" style="display: block;font-size:24px" title="<%=CurrentResourceManager.GetString("Search_Summary_Title")%>">
<loc:Text ResourceId="Search_Summary_Title"  runat="server" />
</div>
</div>
<div class="panoramaItem-content" style="height: 275px;">
<div class="component" style="height: 100%;">
<div class="SearchSummaryViewContainer panoramaItem-control" data-vmid="116">
<div class="SummaryContainer" id="searchSummaryContainer" style="height: 262px;">
<div class="summaryDescription" id="summaryDescription">
<div class="summaryNoResult" data-id="noResultElement">
{{if _entitiesNotFound != ""}}
${_entitiesNotFound}<br><br>${_maxLimitExceedEntities}
{{else}}
${_maxLimitExceedEntities}
{{/if}}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</script>
<script language="javascript">

var MultiEntityQuickFindSearchType = 0;

function keyDownHandler(e) {
if (window.event) {
e = window.event;
}
if (e.keyCode == 13) {
document.getElementById("SearchButton").click();
return false;
}
}

function SetupAndExecuteSearch() {

if (IsRelevanceSearchEnabledInOrgSettings || IsCustomSearchEnabled) {
Mscrm.Utilities.setCookie("persistentSearchTypeCookie", MultiEntityQuickFindSearchType, 60 * 24 * 365 * 100);
}
MEQFSearch();
}

function MEQFSearch() {
Mscrm.MultiEntityQuickFind.executeQuickFindSdkCall();
Mscrm.MultiEntityQuickFind.setFilterDropDownHeight();
}


function onSearchChangeClicked() {
var linkElement = document.getElementById("ExternalSearchFullPrivacyDisclaimer");
if (linkElement) {
var href = linkElement.getAttribute("href");
var hrefAttributes = "?pagemode=iframe";
if (href) {
var searchText = document.getElementById("searchTextBox").value;
if (searchText != '') {
hrefAttributes = hrefAttributes + "&text=" + searchText;
}

linkElement.setAttribute("href", href + hrefAttributes);
}
}
}

function onFilterBoxChange() {

var value = document.getElementById("filterComboForMultiEntityQuickFind").value;
var searchtxt = document.getElementById("searchTextBox").value;
var appId = "";
if (window.APP_MODULE_APPID != null) {
appId = "&appid=" + window.APP_MODULE_APPID;
}
if (value == "1") {
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("ExternalSearch");
window.open(Mscrm.CrmUri.create("/ExternalSearch/ExternalSearch.aspx?text=" + searchtxt + appId), '_self');

}
else if(value == "3")
{
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("CustomSearch");
window.open(Mscrm.CrmUri.create("/CustomSearch/CustomSearch.aspx?text=" + searchtxt), '_self');
}
else {
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("ExternalSearch");
window.open(Mscrm.CrmUri.create("/MultiEntityQuickFind/MultiEntityQuickFind.aspx?text=" + searchtxt + appId), '_self');

}
}

function OpenDialogue() {
if (document.getElementById("searchDiagolue").style.display == 'none') {
document.getElementById("searchDiagolue").style.display = "block";
}
else {
document.getElementById("searchDiagolue").style.display = "none";
}
}
function onSelectionBoxChange(value) {
var searchtxt = document.getElementById("searchTextBox").value;
if (value == "1") {
var endPoint = "/externalsearch/externalsearch.aspx?";
endPoint = endPoint.concat("option=0&pagemode=iframe&text=" + searchtxt)
if (window.APP_MODULE_APPID != null) {
endPoint = endPoint.concat("&appid=" + window.APP_MODULE_APPID);
}
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("ExternalSearch");
window.open(Mscrm.CrmUri.create(endPoint), '_self');
}
else if(value == "3")
{
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("CustomSearch");
window.open(Mscrm.CrmUri.create("/CustomSearch/CustomSearch.aspx?text=" + searchtxt), '_self');
}
else {
OpenDialogue();
}
}

function KeyBoardEventIntialize() {
$("#searchSelectionView").keydown(function (e) {
if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 27) {
console.log(e.keyCode);
if (e.keyCode == 13 || e.keyCode == 32)
{
var x = $(".selected");
if (x != null) {
if (x[0].id == "relevanceSearchLi") {
onSelectionBoxChange('1');
}
else if (x[0].id == "customSearchLi") {
onSelectionBoxChange('3');
}
}

if ($("#searchDiagolue").is(":visible")) {
selectOption();
} else {
OpenDialogue();
$("#searchDiagolue").show();
}
if (e.keyCode == 32) {
e.preventDefault();
}
}
if (e.keyCode == 27 && $("#searchDiagolue").is(":visible"))
{
selectOption();

}
if ($("#searchDiagolue").is(":visible")) {
if (e.keyCode == 38) {
var selected = $("#searchDiagolue ul li");
var currentSelection = selected.filter('.selected');
currentSelection.removeClass("selected");
currentSelection.attr("aria-selected", "false");
if (currentSelection.prev().length == 0) {
currentSelection.last().addClass("selected");
currentSelection.last().attr("aria-selected", "true");
} else {
currentSelection.prev().addClass("selected");
currentSelection.prev().attr("aria-selected", "true");
}
}
if (e.keyCode == 40) {
var selected = $("#searchDiagolue ul li");
var currentSelection = selected.filter('.selected');
currentSelection.removeClass("selected");
currentSelection.attr("aria-selected", "false");
if (currentSelection.next().length == 0) {
currentSelection.first().addClass("selected");
currentSelection.first().attr("aria-selected", "true");
} else {
currentSelection.next().addClass("selected");
currentSelection.next().attr("aria-selected", "true");
}
}
e.preventDefault();
}
}
});

$("#searchSelectionView").focusout(function () {
$("#relevanceSearchLi").removeClass("selected");
$("#customSearchLi").removeClass("selected");
$("#categorizedSearchLi").addClass("selected");
selectOption();
});

$("#relevanceSearchLi").mousedown(function () {
onSelectionBoxChange('1');
});

$("#customSearchLi").mousedown(function () {
onSelectionBoxChange('3');
});

}

function selectOption() {
$("#searchDiagolue").hide();
}

$(document).ready(function () {
KeyBoardEventIntialize();
});

</script>
</head>

<body onload="SetupAndExecuteSearch()" tabindex="-1" class="stage" style="background-color: white;">
<form id="resultRender" runat="server">
<input type="hidden" id="entityObjectTypeCode" name="entityObjectTypeCode" value="" runat="server" />

<div class="mainContainer meqfmainContainer" id = "mainContainer" tabindex="-1">
<div class="primaryConductor" id="contentContainer">
<div class="rootViewControl_content conductorContent RootView-searchPage" style="visibility: visible;" tabindex="-1">
<div class="loadingdiv" id="loadingdiv" style="vertical-align:middle;text-align:center;" >
<table class='stdTable' style='background-color:FFFFFF'>
<tr><td style='vertical-align: middle' align='center'><IMG alt='' src='/_imgs/AdvFind/progress.gif'><br /><div id="InviteProgress"></div></td></tr>
</table>
</div>
<% if (IsWebClientVisualRefreshFeatureAvailable) {%>
<div id="ms-crm-searchReflowDiv" class="ms-crm-searchReflowDiv"></div>
<% } %>
<div class="form_header meqfformHeader">
<span class="crmSymbolFont form_header_icon"></span>
<span></span>
<% if(IsWebClientVisualRefreshFeatureAvailable) {%>
<div id="searchBoxHeader" class="searchBoxHeader meqfsearchBoxHeader ms-crm-categorizedSearchHeader">
<% } else { %>
<div id="searchBoxHeader" class="searchBoxHeader meqfsearchBoxHeader">
<% } %>
<div class="leftcolumn">
<div class="startwithrow" style="width:250px;display:block">
<% if(IsWebClientVisualRefreshFeatureAvailable) {%>
<div class="meqfStartLabel ms-crm-meqfFontMetaphor">
<% } else { %>
<div class="meqfStartLabel">
<% } %>
<% if(IsExternalSearchEnabled || IsCustomSearchEnabled)
{ %>
<div style="width: 220px;float: left;" id="searchSelectionView">
<a role="combobox" aria-haspopup="true" aria-autocomplete="none" aria-readonly="true" aria-controls="searchDiagolueUL" aria-label="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip")%>" tabindex="0" id="crmGrid_Selector" class="ms-crm-View-Name ms-crm-View-Name-View-Lite" style="position: relative;text-decoration: none" href="#" onclick="OpenDialogue();" title="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip")%>" id="crmGrid_SavedNewQuerySelector" gridid="crmGrid"><span class="ms-crm-View-Name ms-crm-ViewSelector-title-associated-lite ms-crm-TextAutoEllipsis" style="font-size: 24px;" ><%=CurrentResourceManager.GetString("CategorizedSearch_Relevance_Search")%></span><span class="ms-crm-View-icon ms-crm-ViewSelector-dropdown-icon-associated-lite"><img class="ms-crm-View-icon-associated-lite ms-crm-ImageStrip-Dropdown_Arrow" alt="Select a view" src="/_imgs/grid/dropdown_arrow.png" /></span></a>
</div>
<div id="searchDiagolue" class="ms-crm-VS-Menu" style="width: 220px; display: none; margin-top: 35px; position: fixed; z-index: 1000;">
<ul class="ms-crm-VS-Menu" id="searchDiagolueUL" style="padding: 0px 0px;" role="listbox">
<% if (IsExternalSearchEnabled)
{ %>
<li id="relevanceSearchLi" role="option" aria-selected="true" aria-label="<% =CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip") %>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest" style="float: none;"><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img  alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" /></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default; background-color: none;" onclick="onSelectionBoxChange('1')"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img style="padding-top: 4px;" src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest" style="width: 120px !important;">
<span style="font-weight: normal;" title="<%= CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip")%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest">
<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ExternalSearch_Relevance_Search"))%>

</span>

</nobr>
</span></a></li>
<% } %>
<li id="categorizedSearchLi" role="option" aria-selected="false" aria-label="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip") %>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest selected" style="float: none;"><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img  alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" /></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default;" onclick="onSelectionBoxChange('2')" style="background-color: none;"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img style="padding-top: 4px;" src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest catogerySearchOptionsDiv"><span style="font-weight: normal;" title="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip")%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CategorizedSearch_Relevance_Search"))%></span></nobr></span></a></li>
<% if (IsCustomSearchEnabled)
{ %>
<li id="customSearchLi" role="option" aria-selected="false" aria-label="<% =SearchProviderName %>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest" style="float: none;"><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" /></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default;" onclick="onSelectionBoxChange('3')" style="background-color: none;"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img style="padding-top: 4px;" src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest" style="width: 120px !important;"><span style="font-weight: normal;" title="<% =SearchProviderName %>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest"><% =SearchProviderName %></span></nobr></span></a></li>
<% } %>
</ul>
</div>
<%} else { %>
<span id="meqfStartLabel" class="meqfStartLabel" runat="server">
<loc:Text ResourceId="Search_Label_Meqf" runat="server" />		 </span>
<%} %>
</div>
<span id="useRelevanceSearch" class="useRelevanceSearch" runat="server" style="display:none;">
<a id='ExternalSearchFullPrivacyDisclaimer' class='default-link' href='/ExternalSearch/ExternalSearch.aspx' onclick="onSearchChangeClicked();">
<loc:Text ResourceId="ExternalSearch_Use_Relevance_Search" runat="server" />
</a>
</span>
</div>
<% if (IsExternalSearchEnabled && !IsWebClientVisualRefreshFeatureAvailable) { %>
<div class="enabled searchboxrow">
<%} else { %>
<div class="searchboxrow">
<%} %>
<div class="searchboxiconcontainer meqfsearchboxiconcontainer <% if (IsWebClientVisualRefreshFeatureAvailable) { %>ms-crm-metaphor-searchBoxIconContainer<% } %>" id="searchboxiconcontainer">
<input class="textbox allowTextSelection searchText meqfsearchTextMargin meqfSearchTextBoxWidth" maxlength="200"
id="searchTextBox" runat="server" onkeydown="return keyDownHandler(event);" enableviewstate="true" style="border-color:#cd9835;" />
<button id="SearchButton" class="button meqfSearchButton meqfsearchTextMargin"
type="button" runat="server" onclick="Mscrm.MultiEntityQuickFind.executeQuickFindSdkCall();" style="background-image: none;">
<div class="ms-crm-div-NotVisible"><%=CurrentResourceManager.GetString("Search_Label_Meqf")%></div>
<% if (IsWebClientVisualRefreshFeatureAvailable)
{%>
<img id="findCriteriaImg" src="/_imgs/category_search_visual_refresh.png" class="ms-crm-category-search-visualrefresh" title="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>" alt="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>">
<% } else { %>
<span>
<img title="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>" id="findCriteriaImg" style="vertical-align: middle;padding-bottom:2px" alt="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>" src="/_imgs/Search_White_16.png" />
</span>
<% } %>
</button>
<div class="searchDropDown meqfSearchDropDown meqfinputContainer" id="inputContainer">
<% if(IsWebClientVisualRefreshFeatureAvailable) {%>
<span class="filterLabel ms-crm-meqfFontMetaphor" style="padding-right: 15px" title="<%=CurrentResourceManager.GetString("Search_FilterWith_Label_No_Colon")%>">
<% } else { %>
<span class="filterLabel" style="padding-right: 15px" title="<%=CurrentResourceManager.GetString("Search_FilterWith_Label_No_Colon")%>">
<% } %>
<loc:Text ResourceId="Search_FilterWith_Label_No_Colon" runat="server" />
</span>
<ui:Select id="filterCombo" name="filterCombo" runat="server" onchange="Mscrm.MultiEntityQuickFind.executeQuickFindSdkCall();" />
</div>
</div>
</div>
</div>
</div>
</div>
<% if(IsExternalSearchEnabled) {%>
<div style="text-align: left;">
<%} %>
<% if (IsWebClientVisualRefreshFeatureAvailable) {%>
<div id="emptysearchresult"><img alt="" src="/_imgs/EmptyStates/categorysearch.png"></div>
<% } %>
<div id="searchCriteria" class="searchboxiconcontainer meqfsearchCriteria" runat="server" style="display:none;padding-left: 280px;" />
<div class="panoramaContainer webkitInertiaScroll meqfpanoramaContainer" id="panoramaContainer">
<div class="panoramaContainer-content" id="contentResult" style="overflow: hidden;" tabindex="-1">
</div>
</div>
</div>
</div>
</div>
</div>
</form>
</body>
</html>
