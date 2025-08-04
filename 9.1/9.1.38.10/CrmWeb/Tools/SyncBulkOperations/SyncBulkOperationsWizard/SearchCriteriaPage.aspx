<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SyncBulkOperations.SearchCriteriaPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="javascript">

Sys.Application.add_load(SearchCriteriaPageOnLoad);
function SearchCriteriaPageOnLoad()
{
var advFind = $find("advFind");
<%

if(!advFind.Disabled)
{
%>

document.getElementById("resultRender").action = Mscrm.CrmUri.create("/AdvancedFind/fetchData.aspx?dispActions=false&dispMenuBar=false").toString();

<%
}
%>

var loadXml = "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchXml)%>";

if(!isNullOrEmptyString(loadXml))
{
advFind.Clear();
advFind.set_fetchXml(CrmEncodeDecode.CrmXmlDecode(loadXml));
}
$addHandler(document, 'keydown', function (event) {
if (event.keyCode == 27)
{
if (window.parent && window.parent.parent) {

window.parent.parent.wizardClose();
}
}
});
}


<%

if(!advFind.Disabled)
{
%>
var _oXmlDom = null;

function ExecuteQuery()
{

var advFind = $find("advFind");
var sFetchXml = advFind.get_fetchXml();
if(sFetchXml==null)
{
return;
}


var resultRender = $get("resultRender");

$get("FetchXml", resultRender).value = sFetchXml;
$get("LayoutXml", resultRender).value = advFind.get_layoutXml();
$get("EntityName", resultRender).value = advFind.get_entityName();
$get("DefaultAdvFindViewId", resultRender).value = advFind.get_defaultAdvancedFindViewId();
$get("ViewId", resultRender).value = advFind.get_queryId();
$get("ViewType", resultRender).value = advFind.get_queryObjectType();


_oXmlDom = XUI.Xml.LoadXml(sFetchXml);
if(IsNull(XUI.Xml.GetParserError(_oXmlDom)))
{
$get("SortCol", resultRender).value = GetOrderNodeAttrAndDirection(_oXmlDom);
}


resultFrame.document.body.innerHTML = "<table height='100%' width='100%' style='cursor:wait'><tr><td valign='middle' align='center'><img alt='' src='/_imgs/AdvFind/progress.gif'/><br>" + CrmEncodeDecode.CrmHtmlEncode(LOCID_AF_EXECUTINGSEARCH) + "</td></tr></table>";
switchTo("SEARCH");

window.setTimeout("document.getElementById('resultRender').submit()", 10);
}

function switchTo(sMode)
{
var advancedFind = document.getElementById("advancedFind");
var searchResults = document.getElementById("searchResults");

if(sMode=="AF")
{
advancedFind.style.display = "inline";
searchResults.style.display = "none";
}
else
{
advancedFind.style.display = "none";
searchResults.style.display = "inline";
}
}
<%
}
%>
</script>

<style>
.divContainer
{
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
}

.divChild1
{
position:absolute;
top:0px;
bottom:30px;
left:0px;
right:0px;
}

.divChild2
{
position:absolute;
bottom:0px;
}

.ms-crm-GridActionBar
{
height: 25px;
}
</style>

</head>
<body style="background-color: #ffffff;overflow:auto;">
<FORM id="resultRender" action="" method="post" target="resultFrame">
<INPUT type="hidden" id="FetchXml" name="FetchXml" value="">
<INPUT type="hidden" id="LayoutXml" name="LayoutXml" value="">
<INPUT type="hidden" id="EntityName" name="EntityName" value="">
<INPUT type="hidden" id="DefaultAdvFindViewId" name="DefaultAdvFindViewId" value="">
<INPUT type="hidden" id="ViewId" name="ViewId" value="">
<INPUT type="hidden" id="ViewType" name="ViewType" value="">
<INPUT type="hidden" id="SortCol" name="SortCol" value="">
</FORM>
<form id='searchCriteriaForm' name='searchCriteriaForm' enctype='multipart/form-data' method='post' action='searchCriteriaPage.aspx'>
<input type="hidden" id="fetchXml" name="fetchXml" />
</form>
<div id="advancedFind" style="display:inline;" class="divContainer">
<div class="divChild1">
<cnt:AppAdvancedFind id="advFind" TitleVisible=false IncludeAPIQuery=false runat="Server"/>
</div>
<% if(!advFind.Disabled) { %>
<div class="divChild2">
<ui:Button ID="buttonPreview" OnClick="ExecuteQuery()" runat="server"></ui:Button>
</div>
<% } %>
</div>
<%

if(!advFind.Disabled) { %>
<div id="searchResults" style="display:none;" class="divContainer">
<div class="divChild1">
<iframe name="resultFrame" id="resultFrame" src="/_static/blank.htm" style="width:100%; height:100%; position:absolute; border:none" scrolling="no" ></iframe>
</div>
<div class="divChild2">
<ui:Button ID="buttonBack" OnClick="switchTo('AF')" runat="server"></ui:Button>
</div>
</div>
<% } %>
</body>
</html>
