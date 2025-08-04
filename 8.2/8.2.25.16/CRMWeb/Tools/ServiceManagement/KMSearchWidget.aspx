<%@ Page Language="c#"  EnableViewState="false" Inherits="Microsoft.Crm.Service.Web.Tools.ServiceManagement.KMSearchWidget" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="km" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<title><loc:Text ResourceId="KMControl.USD.SearchPage" runat="server"/></title>
<cnt:appheader id="crmHeader" runat="server" />
<style type="text/css">
body
{
min-width: 0px !important;
margin: 0px;
height: 98%;

}
.kmwall .wallContainer
{
height: 98%;
}
.searchControlContainerDiv
{
position: absolute;
top: 0px;
bottom: 0px;
left:0px;
right:0px;
margin:5px;
height:cal(100%-10px);
height: -webkit-calc(100% - 10px);
height: -moz-calc(100% - 10px);
width:cal(100%-5px);
width: -webkit-calc(100% - 5px);
width: -moz-calc(100% - 5px);
}
</style>
<script type="text/javascript">
var KMControl =null;
function Init()
{
KMControl = $find('searchWidget_container');
if (!IsNull(KMControl))
{

if(Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable())
{
SetFilters();
Search();
}
else if(!IsNull($get('searchWidget_searchTextBox'))){
$get('searchWidget_searchTextBox').setAttribute("disabled",true);
}
}
}
function Search()
{
var searchString = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["query"]) %>;
if (!IsNull(searchString))
{
KMControl.setSearchQuery(searchString);
}
}
function SetFilters()
{
var languageFilter = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["lang"]) %>;
var filterResults = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["filter"]) %>;
var sortMethod = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["sort"]) %>;


if (!IsNull(filterResults) && filterResults != "" && Mscrm.SearchWidgetConstants.articleFilterButtons()[filterResults] != null) {
KMControl.changeSelectedMenuItem(Mscrm.SearchWidgetCommand.articlesFilter, Mscrm.SearchWidgetConstants.articleFilterButtons()[filterResults - 1]);
}


if (!IsNull(sortMethod) && sortMethod != "" && Mscrm.SearchWidgetConstants.articleFilterButtons()[sortMethod] != null) {
KMControl.changeSelectedMenuItem(Mscrm.SearchWidgetCommand.sortFilter, Mscrm.SearchWidgetConstants.sortFilterButtons()[sortMethod - 1]);
}
}
Sys.Application.add_load(Init);
</script>
</head>
<body>
<form id="SearchControlForm" runat="server">
<div id="SearchControlContainerDiv" class="searchControlContainerDiv">
<km:SearchWidget id="searchWidget" runat="server">
</km:SearchWidget>
</div>
</form>
</body>
</html>
