<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Pages.CustomSearchPage" EnableEventValidation="true" %>

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
<script language="javascript">

var CustomSearchType = 3;

function keyDownHandler(e)
{
if (window.event)
{
e = window.event;
}
if (e.keyCode == 13)
{
document.getElementById("SearchButton").click();
return false;
}
}

function SetupAndExecuteSearch()
{

Mscrm.Utilities.setCookie("persistentSearchTypeCookie", CustomSearchType, 60 * 24 * 365 * 100);
}


function OpenDialogue()
{
if (document.getElementById("searchDiagolue").style.display == 'none')
{
document.getElementById("searchDiagolue").style.display = "block";
}
else
{
document.getElementById("searchDiagolue").style.display = "none";
}
}


function LoadThirdPartySearchIFrame()
{
var thirdPartyIframe = "";
var searchtxt = document.getElementById("searchTextBox").value;
var url = Mscrm.CrmUri.create("<%=CustomSearchIFrameUrlRaw%>" + "?data=" + CrmEncodeDecode.CrmUrlEncode(searchtxt) + "&userlcid=" + LOCID_LCID);
if (window.top.document.getElementById("contentIFrame0").contentDocument.getElementById("thirdPartySearchIFrame") != null)
{
thirdPartyIframe = window.top.document.getElementById("contentIFrame0").contentDocument.getElementById("thirdPartySearchIFrame");
}
else if (window.top.document.getElementById("contentIFrame1").contentDocument.getElementById("thirdPartySearchIFrame") != null)
{
thirdPartyIframe = window.top.document.getElementById("contentIFrame1").contentDocument.getElementById("thirdPartySearchIFrame");
}
thirdPartyIframe.src = url;
}


function onSelectionBoxChange(value)
{
var searchtxt = "";
if (document.getElementById("searchboxiconcontainer").style.display != "none")
{
searchtxt = document.getElementById("searchTextBox").value;
}
else
{
if (window.top.document.getElementById("contentIFrame0").contentDocument.getElementById("thirdPartySearchIFrame") != null)
{
if(window.top.document.getElementById("contentIFrame0").contentDocument.getElementById("thirdPartySearchIFrame").contentDocument.getElementById("thirdPartySearchBox") != null)
{
searchtxt = window.top.document.getElementById("contentIFrame0").contentDocument.getElementById("thirdPartySearchIFrame").contentDocument.getElementById("thirdPartySearchBox").value;
}
}
else if (window.top.document.getElementById("contentIFrame1").contentDocument.getElementById("thirdPartySearchIFrame") != null)
{
if(window.top.document.getElementById("contentIFrame1").contentDocument.getElementById("thirdPartySearchIFrame").contentDocument.getElementById("thirdPartySearchBox") != null)
{
searchtxt = window.top.document.getElementById("contentIFrame1").contentDocument.getElementById("thirdPartySearchIFrame").contentDocument.getElementById("thirdPartySearchBox").value;
}
}
}
if (value == "1")
{
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("ExternalSearch");
window.open(Mscrm.CrmUri.create("/externalsearch/externalsearch.aspx?text=" + searchtxt), '_self');
}
else if (value == "2")
{
Mscrm.MultiEntityQuickFind.metricsReportingForSearchDropDown("CategorizedSearch");
window.open(Mscrm.CrmUri.create("/MultiEntityQuickFind/MultiEntityQuickFind.aspx?pagemode=iframe&text=" + searchtxt), '_self');
}
else
{
OpenDialogue();
}
}

function KeyBoardEventIntialize()
{
$("#searchSelectionView").keydown(function (e)
{
if (e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 27)
{
console.log(e.keyCode);
if (e.keyCode == 13 || e.keyCode == 32)
{
var x = $(".selected");
if (x != null)
{
if (x[0].id == "relevanceSearchLi")
{
onSelectionBoxChange('1');
}
else if (x[0].id == "categorizedSearchLi")
{
onSelectionBoxChange('2');
}
}
if ($("#searchDiagolue").is(":visible"))
{
selectOption();
}
else
{
OpenDialogue();
$("#searchDiagolue").show();
}
if (e.keyCode == 32)
{
e.preventDefault();
}
}
if (e.keyCode == 27 && $("#searchDiagolue").is(":visible"))
{
selectOption();
}
if ($("#searchDiagolue").is(":visible"))
{
if (e.keyCode == 38)
{
var selected = $("#searchDiagolue ul li");
var currentSelection = selected.filter('.selected');
currentSelection.removeClass("selected");
currentSelection.attr("aria-selected", "false");
if (currentSelection.prev().length == 0)
{
currentSelection.last().addClass("selected");
currentSelection.last().attr("aria-selected", "true");
}
else
{
currentSelection.prev().addClass("selected");
currentSelection.prev().attr("aria-selected", "true");
}
}
if (e.keyCode == 40)
{
var selected = $("#searchDiagolue ul li");
var currentSelection = selected.filter('.selected');
currentSelection.removeClass("selected");
currentSelection.attr("aria-selected", "false");
if (currentSelection.next().length == 0)
{
currentSelection.first().addClass("selected");
currentSelection.first().attr("aria-selected", "true");
}
else
{
currentSelection.next().addClass("selected");
currentSelection.next().attr("aria-selected", "true");
}
}
e.preventDefault();
}
}
});

$("#searchSelectionView").focusout(function ()
{
$("#relevanceSearchLi").removeClass("selected");
$("#categorizedSearchLi").removeClass("selected");
$("#customSearchLi").addClass("selected");
selectOption();
});

$("#relevanceSearchLi").mousedown(function ()
{
onSelectionBoxChange('1');
});

$("#categorizedSearchLi").mousedown(function ()
{
onSelectionBoxChange('2');
});
}

function selectOption()
{
$("#searchDiagolue").hide();
}

$(document).ready(function ()
{
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
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) {%>
<div id="ms-crm-searchReflowDiv" class="ms-crm-searchReflowDiv"></div>
<% } %>
<div class="form_header meqfformHeader">
<span class="crmSymbolFont form_header_icon"></span>
<span></span>
<% if(Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) {%>
<div id="searchBoxHeader" class="searchBoxHeader meqfsearchBoxHeader ms-crm-categorizedSearchHeader">
<% } else { %>
<div id="searchBoxHeader" class="searchBoxHeader meqfsearchBoxHeader">
<% } %>
<div class="leftcolumn">
<div class="startwithrow" style="width:250px;display:block">
<% if(Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) {%>
<div class="meqfStartLabel ms-crm-meqfFontMetaphor">
<% } else { %>
<div class="meqfStartLabel">
<% } %>
<div style="width: 220px;float: left;" id="searchSelectionView">
<a role="combobox" aria-haspopup="true" aria-autocomplete="none" aria-readonly="true" aria-controls="searchDiagolueUL" aria-label="<%= SearchProviderName %>" tabindex="0" id="crmGrid_Selector" class="ms-crm-View-Name ms-crm-View-Name-View-Lite" style="position: relative;text-decoration: none" href="#" onclick="OpenDialogue();" title="<%=SearchProviderName%>" id="crmGrid_SavedNewQuerySelector" gridid="crmGrid"><span class="ms-crm-View-Name ms-crm-ViewSelector-title-associated-lite ms-crm-TextAutoEllipsis" style="font-size: 24px;" ><%=SearchProviderName%></span><span class="ms-crm-View-icon ms-crm-ViewSelector-dropdown-icon-associated-lite"><img class="ms-crm-View-icon-associated-lite ms-crm-ImageStrip-Dropdown_Arrow" alt="Select a view" src="/_imgs/grid/dropdown_arrow.png" /></span></a>
</div>
<div id="searchDiagolue" class="ms-crm-VS-Menu" style="width: 220px; display: none; margin-top: 35px; position: fixed; z-index: 1000;">
<ul class="ms-crm-VS-Menu" id="searchDiagolueUL" style="padding: 0px 0px;" role="listbox">
<% if (IsExternalSearchEnabled) { %>
<li id="relevanceSearchLi" role="option" aria-selected="true" aria-label="<% =CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip") %>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest" style="float: none;"><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img  alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" /></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default; background-color: none;" onclick="onSelectionBoxChange('1')"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img style="padding-top: 4px;" src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest" style="width: 120px !important;">
<span style="font-weight: normal;" title="<%= CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip")%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest">
<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ExternalSearch_Relevance_Search"))%>
</span>
</nobr>
</span></a></li>
<% } %>
<li id="categorizedSearchLi" role="option" aria-selected="false" aria-label="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip") %>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest" style="float: none;"><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img  alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" /></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default;" onclick="onSelectionBoxChange('2')" style="background-color: none;"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img style="padding-top: 4px;" src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest catogerySearchOptionsDiv"><span style="font-weight: normal;" title="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip")%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CategorizedSearch_Relevance_Search"))%></span></nobr></span></a></li>
<li id="customSearchLi" role="option" aria-selected="false" aria-label="<% =SearchProviderName%>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest selected" style="float: none;"><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" /></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default;" onclick="onSelectionBoxChange('3')" style="background-color: none;"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img style="padding-top: 4px;" src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest" style="width: 120px !important;"><span style="font-weight: normal;" title="<% =SearchProviderName%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest"><% =SearchProviderName %></span></nobr></span></a></li>
</ul>
</div>
</div>
<span id="useRelevanceSearch" class="useRelevanceSearch" runat="server" style="display:none;">
<a id='ExternalSearchFullPrivacyDisclaimer' class='default-link' href='/ExternalSearch/ExternalSearch.aspx' onclick="onSearchChangeClicked();">
<loc:Text ResourceId="ExternalSearch_Use_Relevance_Search" runat="server" />
</a>
</span>
</div>
<% if (IsExternalSearchEnabled && !Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)){%>
<div class="enabled searchboxrow">
<%} else { %>
<div class="searchboxrow">
<%} %>
<div class="searchboxiconcontainer meqfsearchboxiconcontainer <% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) { %>ms-crm-metaphor-searchBoxIconContainer<% } %>" id="searchboxiconcontainer" <% if(!IsSearchBoxVisible) { %>style="display: none;" <% } %> >
<input class="textbox allowTextSelection searchText meqfsearchTextMargin meqfSearchTextBoxWidth" maxlength="200"
id="searchTextBox" runat="server" onkeydown="return keyDownHandler(event);" enableviewstate="true" style="border-color:#cd9835;" />
<button id="SearchButton" class="button meqfSearchButton meqfsearchTextMargin"
type="button" runat="server" onclick="LoadThirdPartySearchIFrame();" style="background-image: none;">
<div class="ms-crm-div-NotVisible"><%=CurrentResourceManager.GetString("Search_Label_Meqf")%></div>
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null))
{%>
<img id="findCriteriaImg" src="/_imgs/category_search_visual_refresh.png" class="ms-crm-category-search-visualrefresh" title="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>" alt="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>">
<% } else { %>
<span>
<img title="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>" id="findCriteriaImg" style="vertical-align: middle;padding-bottom:2px" alt="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>" src="/_imgs/Search_White_16.png" />
</span>
<% } %>
</button>
<div class="searchDropDown meqfSearchDropDown meqfinputContainer" id="inputContainer" style="display: none;">
<% if(Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null)) {%>
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
<div id="searchCriteria" class="searchboxiconcontainer meqfsearchCriteria" runat="server" style="display:none;padding-left: 280px;" />
<div class="panoramaContainer webkitInertiaScroll meqfpanoramaContainer" id="panoramaContainer">
<div class="panoramaContainer-content" id="contentResult" style="overflow: hidden; padding: 0px;" tabindex="-1">
<iframe src= <%=CustomSearchIFrameUrl %> title="<%= SearchProviderName %>" name="thirdPartySearchIFrame" id="thirdPartySearchIFrame" frameborder="0" style="border: 0px; margin: 0px; padding: 0px; width: 100%; height: 99%; position: relative;">
</iframe>
</div>
</div>
</div>
</div>
</div>
</div>
</form>
</body>
</html>