<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.ParticipatingQueryFilterPage"  %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<html xmlns:Crm>
<head>
<style>
.ms-crm-AFContainer
{
<% if(!advFind.Disabled) { %>
bottom:35px !important;
<% } %>
}
</style>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="javascript">

Sys.Application.add_load(function()
{
$addHandler(document, "keydown",ExecuteKeyDown)

var advFind  = $find("advFind");
if (IsNull(advFind))
{
return;
}

<%

if(!advFind.Disabled)
{
%>

resultRenderElement = document.getElementById("resultRender");
resultRenderElement.action = Mscrm.CrmUri.create("/AdvancedFind/fetchData.aspx?dispActions=false&dispMenuBar=false").toString();

<%
}
%>

var loadXml = "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchXml)%>";



if (!isNullOrEmptyString(loadXml))
{
loadXml = addMissingLinkEntityNodes(loadXml);
advFind.ResetControl();
}
advFind.set_fetchXml(CrmEncodeDecode.CrmXmlDecode(loadXml));
});


<%

if(!advFind.Disabled)
{
%>
var _oXmlDom = null;

function ExecuteQuery()
{

var advFind  = $find("advFind");
var sFetchXml = advFind.get_fetchXml();
if(sFetchXml==null)
{
return;
}


with(resultRenderElement)
{
FetchXml.value		= sFetchXml;
LayoutXml.value		= advFind.get_layoutXml();
EntityName.value	= advFind.get_entityName();
DefaultAdvFindViewId.value = advFind.get_defaultAdvancedFindViewId();
ViewId.value		= advFind.get_queryId();
ViewType.value		= advFind.get_queryObjectType();


_oXmlDom = XUI.Xml.LoadXml(sFetchXml);
if(IsNull(XUI.Xml.GetParserError(_oXmlDom)))
{
SortCol.value = GetOrderNodeAttrAndDirection(_oXmlDom);
}
}


resultFrame.document.body.innerHTML = "<table height='100%' width='100%' style='cursor:wait'><tr><td valign='middle' align='center' style='height:100%'><img alt='' src='/_imgs/AdvFind/progress.gif'/><br>" + LOCID_AF_EXECUTINGSEARCH + "</td></tr></table>";
switchTo("SEARCH");

window.setTimeout("resultRenderElement.submit()", 10);
}

function switchTo(sMode)
{
if(sMode=="AF")
{
$get("advancedFind").style.display = "block";
$get("searchResults").style.display = "none";
}
else
{
$get("advancedFind").style.display = "none";
$get("searchResults").style.display = "block";
}
}

function ExecuteKeyDown(eventObj)
{
if (eventObj.keyCode == KEY_S)
{
if (eventObj.ctrlKey || eventObj.altKey)
{
eventObj.keyCode = 0;
eventObj.returnValue = true;
var _advfind = $find("advFind");
var _parentCrmForm = $find("crmForm", window.parent);
if (!IsNull(_parentCrmForm))
{
if(_parentCrmForm.get_isDirty() == true || _advfind.get_isDirty()==true)
{
_parentCrmForm.SubmitCrmForm(1, true, true, false);
}
}
}
}
}









function addMissingLinkEntityNodes(rollupQueryFetchXml)
{

rollupQueryFetchXml = CrmEncodeDecode.CrmXmlDecode(rollupQueryFetchXml);


var advancedFindFetchXml = $find("advFind").get_fetchXml();



var layoutXml = $find("advFind").get_layoutXml();

var oXmlDomRollupQueryFetch = XUI.Xml.LoadXml(rollupQueryFetchXml);
var oXmlDomAdvancedFindFetch = XUI.Xml.LoadXml(advancedFindFetchXml);
var oXmlDomLayoutXml = XUI.Xml.LoadXml(layoutXml);


var rollupQueryEntityNode = XUI.Xml.SelectSingleNode(oXmlDomRollupQueryFetch, "//entity", null);


var layoutAttributeNodes = XUI.Xml.SelectNodes(oXmlDomLayoutXml, "//cell");
if (!IsNull(layoutAttributeNodes))
{






for (var i = 0; i < layoutAttributeNodes.length; i++)
{
var layoutAttributeNode = layoutAttributeNodes[i];
var attributeName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(layoutAttributeNode, "./@name", null));





if(attributeName.indexOf('.') > 0)
{

var tokens = attributeName.split(".");
var linkEntityAlias = tokens[0];
var linkEntityAttributeName = tokens[1];


var xPathExpression = "//link-entity[@alias='" + linkEntityAlias + "']";
var linkEntityNode = XUI.Xml.SelectSingleNode(oXmlDomRollupQueryFetch, xPathExpression, null);
if(IsNull(linkEntityNode))
{




linkEntityNode = XUI.Xml.SelectSingleNode(oXmlDomAdvancedFindFetch, xPathExpression, null);
if(!IsNull(linkEntityNode))
{


while(linkEntityNode.childNodes.length > 0)
{
linkEntityNode.removeChild(linkEntityNode.childNodes[0]);
}


rollupQueryEntityNode.appendChild(linkEntityNode);
}
}


var attributeXPathExpression = "./attribute[@name='" + linkEntityAttributeName + "']";
var linkEntityAttribute = XUI.Xml.SelectSingleNode(linkEntityNode, attributeXPathExpression, null);

if(IsNull(linkEntityAttribute) && !IsNull(linkEntityNode))
{


var attributeNodeXml = "<attribute name='" + linkEntityAttributeName + "'></attribute>";
var oXmlDomAttributeNode = XUI.Xml.LoadXml(attributeNodeXml);
var attributeNode = XUI.Xml.SelectSingleNode(oXmlDomAttributeNode, "//attribute", null);
linkEntityNode.appendChild(oXmlDomAttributeNode);
}
}
}
}


return CrmEncodeDecode.CrmXmlEncode(XUI.Xml.XMLSerializer.serializeToString(oXmlDomRollupQueryFetch));
}


<%
}
%>
</script>
</head>
<body style="background-color: #ffffff;overflow:auto;">
<FORM id="resultRender" action="" method="post" target="resultFrame">
<INPUT type="hidden" name="FetchXml" value="">
<INPUT type="hidden" name="LayoutXml" value="">
<INPUT type="hidden" name="EntityName" value="">
<INPUT type="hidden" name="DefaultAdvFindViewId" value="">
<INPUT type="hidden" name="ViewId" value="">
<INPUT type="hidden" name="ViewType" value="">
<INPUT type="hidden" name="SortCol" value="">
</FORM>
<form name='searchCriteriaForm' enctype='multipart/form-data' method='post' action='searchCriteriaPage.aspx'>
<input type="hidden" id="fetchXml" name="fetchXml" />
</form>
<div id="advancedFind" style="width:100%;height:100%;position:relative">
<div class="ms-crm-absolutePosition ms-crm-AFContainer">
<div id="dummtDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppAdvancedFind id="advFind" TitleVisible=false IncludeAPIQuery=false runat="Server"/>
</div>
</div>
<% if(!advFind.Disabled) { %>
<div class="ms-crm-absolutePosition" style="height:25px;top:auto">
<div class="BulkDeleteWizard_td_btn">
<ui:Button ID="buttonPreview" OnClick="ExecuteQuery()" runat="server"></ui:Button>
</div>
</div>
<% } %>
</div>
<%

if(!advFind.Disabled) {	%>
<div id="searchResults" style="height:100%;width:100%;display:none;position:relative">
<div style="height:100%;width:100%">
<div class="ms-crm-absolutePosition ms-crm-AFContainer" style="padding-bottom: 5px;bottom:35px">
<div id="dummtDiv2" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<iframe name="resultFrame" id="Iframe1" src="/_static/blank.htm" style="width:100%;height:100%" scrolling="no"></iframe>
</div>
</div>
<div style="height:25px;top:auto" class="ms-crm-absolutePosition">
<div class="BulkDeleteWizard_td_btn">
<ui:button id="buttonBack" onclick="switchTo('AF')" runat="server"></ui:button>
</div>
</div>
</div>
</div>
<% } %>
</body>
</html>
