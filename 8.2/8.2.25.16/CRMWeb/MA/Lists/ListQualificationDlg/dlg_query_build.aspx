<!DOCTYPE html >

<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.MA.QueryBuildPage"AutoEventWireup="false" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Metadata" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>

<html xmlns:Crm>
<head>
<title><loc:Text ResourceId="MA.List.Dialogs.ManageMembers.Title" runat="server" /></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="Javascript">
var _sListId = <% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["ListId"]) %>;
var _sInvokeType = <% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["InvokeType"]) %>;
var lqAdvFind = null;
var crmTabBar;
var crmGrid;


var NO_OP = 0;
var SELECTED = 1;
var ALLINQUERY = 2;



Sys.Application.add_init(SetContainerTopIfNotSet);
function SetContainerTopIfNotSet()
{
var contentContainerTop = XUI.Html.GetComputedStyle($get('content_container'), 'top');
if(contentContainerTop.replace('px', '') == 0)
{
SetContainerTopStyle($get('top_container').offsetHeight + 'px');
}
}

Sys.Application.add_load(QueryBuilderOnLoad);
function QueryBuilderOnLoad()
{
lqAdvFind  = $find("lqAdvFind");
crmTabBar  = $find("crmTabBar");
crmGrid    = $find("crmGrid");
<%

if (_privilegeCheck.CanRead)
{
%>

crmGrid.add_onBeforeFormLoad(LoadSavedSearch);
crmGrid.SetParameter("disableDblClick", "0");

crmGrid.SetParameter("returnedtypecode", $get("crmSelectType").value);
crmGrid.SetParameter("customquery", "FilterByObjectType");
crmGrid.Reset();
var loadXml = "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchXml)%>";
if(!isNullOrEmptyString(loadXml))
{
lqAdvFind.ResetControl();

var layoutXmlDom = XUI.Xml.CreateDocument();
var grid = layoutXmlDom.appendChild(layoutXmlDom.createElement("grid"));
grid.setAttribute("name", "resultset");
var row = grid.appendChild(layoutXmlDom.createElement("row"));
row.setAttribute("name", "result");

var fetchXmlDom = XUI.Xml.LoadXml(CrmEncodeDecode.CrmXmlDecode(loadXml));
var attributes = fetchXmlDom.getElementsByTagName("attribute");

for (var i = 0; i < attributes.length; i++) {
var attributeName = attributes[i].getAttribute("name");
var cell = row.appendChild(layoutXmlDom.createElement("cell"));
cell.setAttribute("name", attributeName);
}

var layoutXml = XUI.Xml.XMLSerializer.serializeToString(layoutXmlDom);
lqAdvFind.set_layoutXml(layoutXml);
}
lqAdvFind.set_fetchXml(CrmEncodeDecode.CrmXmlDecode(loadXml));
<%
}
%>

<%

if(!lqAdvFind.Disabled)
{
%>

$get("resultRender").action = Mscrm.CrmUri.create("/AdvancedFind/fetchData.aspx" + ((window.location.search && window.location.search.length > 0) ? window.location.search + "&" : "?") + "dispActions=false").toString();

<%

if(_privilegeCheck.CanRead)
{
%>
lqAdvFind.add_onAfterSave(AfterSave);
lqAdvFind.add_onAfterSaveAs(AfterSave);
<%
}
%>
<%
}
%>
}

<%

if(!lqAdvFind.Disabled)
{
%>
var _oXmlDom = XUI.Xml.CreateDocument();



function createAttribute( name, value, currentNode)
{
var attrib = _oXmlDom.createAttribute(name);
attrib.nodeValue = value;
currentNode.attributes.setNamedItem(attrib);
}



function createElement( tag, currentNode, refChild)
{
var linkElem = _oXmlDom.createElement(tag);
var linkFrag = _oXmlDom.createDocumentFragment();
linkFrag.appendChild(linkElem);
currentNode.insertBefore(linkFrag, refChild);
}

function ExecuteQuery()
{

var sFetchXml = lqAdvFind.get_fetchXml();


if(sFetchXml == null)
{
return;
}



if(_sInvokeType == "lqRemove" || _sInvokeType == "lqKeep")
{
_oXmlDom = XUI.Xml.LoadXml(sFetchXml);

var entityId;
var oNode = _oXmlDom.childNodes[0].childNodes[0];


switch(oNode.attributes[0].nodeValue)
{
case "account":
entityId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Metadata.MetadataCache.GetInstance(new OrganizationContext(UserInformation.Current.OrganizationId)).GetEntity( Util.Account ).PrimaryKey.LogicalName) %>;
break;

case "lead":
entityId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Metadata.MetadataCache.GetInstance(new OrganizationContext(UserInformation.Current.OrganizationId)).GetEntity( Util.Lead ).PrimaryKey.LogicalName) %>;
break;

case "contact":
entityId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Metadata.MetadataCache.GetInstance(new OrganizationContext(UserInformation.Current.OrganizationId)).GetEntity( Util.Contact ).PrimaryKey.LogicalName) %>;
break;
}


createElement( "link-entity", oNode, oNode.childNodes[0]);


var linkNode = oNode.childNodes[0];
createAttribute("name", "listmember", linkNode);
createAttribute("from", "entityid",   linkNode);
createAttribute("to",   entityId,     linkNode);


createElement( "filter", linkNode, linkNode.childNodes[0]);


createElement( "condition", linkNode.childNodes[0], linkNode.childNodes[0].childNodes[0]);


var condNode = linkNode.childNodes[0].childNodes[0];
createAttribute("attribute", "listid", condNode);
createAttribute("operator",  "eq",     condNode);
createAttribute("value",     _sListId, condNode);


sFetchXml = XUI.Xml.XMLSerializer.serializeToString(_oXmlDom);
}


var resultRender = $get("resultRender");
resultRender.FetchXml.value		= sFetchXml;
resultRender.LayoutXml.value		= lqAdvFind.get_layoutXml();
resultRender.EntityName.value	= lqAdvFind.get_entityName();
resultRender.DefaultAdvFindViewId.value = lqAdvFind.get_defaultAdvancedFindViewId();
resultRender.ViewId.value		= lqAdvFind.get_queryId();
resultRender.ViewType.value		= lqAdvFind.get_queryObjectType();


_oXmlDom = XUI.Xml.LoadXml(sFetchXml);
if(IsNull(XUI.Xml.GetParserError(_oXmlDom)))
{
resultRender.SortCol.value = GetOrderNodeAttrAndDirection(_oXmlDom);
}



resultRender.submit();


window.setTimeout("switchTo(" + "'SEARCH'" + ")", 10);
}

function switchTo(sMode)
{

var advancedFind = $get("advancedFind");
var searchResults = $get("searchResults");
if(sMode=="AF")
{
crmTabBar.get_element().style.display = "block";
$get('crmTabBar_div').style.display = "block";
advancedFind.style.display = "inline";
searchResults.style.display = "none";
var x = $get('top_container').offsetHeight;
$get('content_container').style.top = x + "px";
}
else
{
crmTabBar.get_element().style.display = "none";
$get('crmTabBar_div').style.display = "none";
advancedFind.style.display = "none";
searchResults.style.display = "inline";
$get('btnLqAction').style.width = "auto";
var x = $get('top_container').offsetHeight;
$get('content_container').style.top = x + "px";
var y = $get('footer_container').offsetHeight;
$get('results_container').style.bottom = y + "px";
}
}


function LqAction()
{
if(_sInvokeType != "lqUseQuery")
{

var iOpt = NO_OP;


var resultGrid = $get('resultFrame').contentWindow.$find("crmGridControl");
var a = getSel(resultGrid);


if(resultGrid.get_innerGrid().get_numberOfRecords() == 0)
{
alert(LOCID_LQ_NORECORDFOUND);
return;
}


if($get("radOpt1").checked)
{
iOpt = SELECTED;


if(a.length == 0)
{
alert(LOCID_LQ_NORECORDSELECTED);
return;
}
}
else if($get("radOpt2").checked)
{
iOpt = ALLINQUERY;
}
}

var iObjType = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["ListMemberType"])%>;
var oParams = "itemObjectId=" + CrmEncodeDecode.CrmUrlEncode(_sListId);
if(_sInvokeType != "lqUseQuery")
{
oParams += "&iObjType=" + CrmEncodeDecode.CrmUrlEncode(iObjType);
oParams += "&itemObjectTypeCode=" + CrmEncodeDecode.CrmUrlEncode(List);
oParams += "&iTotal=" + CrmEncodeDecode.CrmUrlEncode(a.length);
oParams += "&savedQueryId=" + CrmEncodeDecode.CrmUrlEncode(lqAdvFind.get_queryId());
oParams += "&savedQueryType=" + CrmEncodeDecode.CrmUrlEncode(lqAdvFind.get_queryObjectType());
oParams += "&isDirty=" + CrmEncodeDecode.CrmUrlEncode(lqAdvFind.get_isDirty());
oParams += "&sInvokeType=" + CrmEncodeDecode.CrmUrlEncode(_sInvokeType);
}


switch(_sInvokeType)
{
case "lqAdd":


ProcessLQAdd(lqAdvFind.get_fetchXml(), oParams, a, iOpt);

break;

case "lqRemove":


ProcessLQRemove(lqAdvFind.get_fetchXml(), oParams, a, iOpt);

break;

case "lqKeep":


ProcessLQKeep(lqAdvFind.get_fetchXml(), oParams, a, iOpt);

break;

case "lqUseQuery":

var layoutXmlDom = XUI.Xml.LoadXml(lqAdvFind.get_layoutXml());
var attributes = layoutXmlDom.getElementsByTagName("cell");
var attributeNames = [];
for (var i = 0; i < attributes.length; i++) {
attributeNames.push(attributes[i].getAttribute("name"));
}

var fetchXmlDom = XUI.Xml.LoadXml(lqAdvFind.get_fetchXml());
var entity = fetchXmlDom.getElementsByTagName("entity")[0];
for (var i = 0; i < attributeNames.length; i++) {
var attributeName = attributeNames[i];
var fAttributes = entity.getElementsByTagName("attribute");
for (var j = 0; j < fAttributes.length; j++) {
var fAttr = fAttributes[j];
if (fAttr.parentElement == entity && fAttr.getAttribute("name") == attributeName) {
entity.appendChild(fAttr);
break;
}
}
}

ProcessLQUseQuery(XUI.Xml.XMLSerializer.serializeToString(fetchXmlDom), oParams);
break;

}

}

function getSel(sGridName)
{
var a = sGridName.get_innerGrid().get_selectedRecords();

var backCompatArray = new Array(a.length);

for (var i=0; i < a.length; i++)
{
backCompatArray[i] = a[i][0];
}

return backCompatArray;
}


var _bRecsSelected;
function getNotSel(sGridName)
{
var o = sGridName.get_innerGrid();
var iTotal = o.get_numberOfRecords();

if (iTotal == 0)
{
return false;
}

var a = new Array;
var iLen = o.get_selectedRecords().length;

if (iLen == 0)
{
_bRecsSelected= "false";
}
else
{
_bRecsSelected = "true";
}
var ii = 0;

for (var i=0; i < iTotal; i++)
{
if (!(o.rows[i].selected))
{
a[ii] = o.rows[i].oid;
ii++;
}
if (ii == (iTotal- iLen)) break;
}

return a;
}

function RemoveFromList()
{
var a = getNotSel($get('resultFrame').contentWindow.$find("crmGridControl"));
var sIds;

if (a.length != 0)
{
sIds = a[0];
iLen = a.length;
for(var i=1; i< iLen; i++)
{
sIds += ";" + a[i];
}
}
var oParams = "iListId="+_sListId + "&iTotal="+a.length+"&sIds="+sIds+"&savedQueryId="+lqAdvFind.get_queryId()+"&savedQueryType="+lqAdvFind.get_queryObjectType()+"&isDirty="+ lqAdvFind.get_isDirty();
OpenQualWin (lqAdvFind.get_fetchXml(), oParams, a, _bRecsSelected);
}
<%
}
%>

<%

if(_privilegeCheck.CanRead)
{
%>
function AfterSave()
{

crmGrid.Reset();
}

function FilterGridByType(sType)
{

crmGrid.SetParameter("returnedtypecode", crmSelectType.value);
crmGrid.SetParameter("customquery", "FilterByObjectType");


var SavedQuerySelector = document.getElementById("crmGrid_SavedQuerySelector");
if (SavedQuerySelector.value == LOCID_SEARCH_RESULTS)
{
quickFind(crmGrid);
}
else
{
handleView(SavedQuerySelector, crmGrid);
}
}


function LoadSavedSearch(sender, oArgs)
{


crmTabBar.down(tab0Tab, true);

<%

if(!lqAdvFind.Disabled)
{
%>

if(!lqAdvFind.get_isDirty() || confirm(LOCID_AF_SEARCHMODIFIED_MSG))
{

lqAdvFind.Load(oArgs.objectID, oArgs.objectTypeCode);
}
<%
}
%>
oArgs.breakEvent = true;
}

<%
}
%>

</script>
<style type="text/css">
td.ms-crm-TableCell-Max{height:auto !important;}
div.dlg_query_build_BackBtn,
div.dlg_query_build_BtnAction
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
}
</style>
</head>
<body scroll="no">
<FORM id="resultRender" action="" method="post" target="resultFrame">
<INPUT type="hidden" name="FetchXml" value="">
<INPUT type="hidden" name="LayoutXml" value="">
<INPUT type="hidden" name="EntityName" value="">
<INPUT type="hidden" name="DefaultAdvFindViewId" value="" />
<INPUT type="hidden" name="ViewId" value="">
<INPUT type="hidden" name="ViewType" value="">
<INPUT type="hidden" name="SortCol" value="">
</FORM>



<div style="height:100%; width:100%">
<div id="top_container">
<div>
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server" />
</div>
<div class="dlg_query_build_div_Member">
<% if(Request.QueryString["InvokeType"] == listQueryAddAction)
{
%>
<img alt="" src="/_imgs/ico_18_add_member_af.gif">
<label style="FONT-WEIGHT:<%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>">
<loc:Text ResourceId="MA.List.Dialogs.LQ.AddMembers.AdvFind" runat="server" />
</label>
<%
}
else if(Request.QueryString["InvokeType"] == listQueryRemoveAction)
{
%>
<img alt="" src="/_imgs/ico_18_remove_member_af.gif">
<label style="FONT-WEIGHT:<%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>">
<loc:Text ResourceId="MA.List.Dialogs.LQ.RemoveMembers.AdvFind" runat="server" />
</label>
<%
}
else if(Request.QueryString["InvokeType"] == listQueryKeepAction)
{
%>
<img alt="" src="/_imgs/ico_18_keep_member_af.gif">
<label style="FONT-WEIGHT:<%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>">
<loc:Text ResourceId="MA.List.Dialogs.LQ.KeepMembers.AdvFind" runat="server" />
</label>
<%
}
%>
</div>
<div class="dlg_query_build_div_ManageMember">
<label style="COLOR:#666666">
<% if(Request.QueryString["InvokeType"] == listQueryAddAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.AddMembers.AdvFind.Desc" runat="server" />
<%
}
else if(Request.QueryString["InvokeType"] == listQueryRemoveAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.RemoveMembers.AdvFind.Desc" runat="server" />
<%
}
else if(Request.QueryString["InvokeType"] == listQueryKeepAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.KeepMembers.AdvFind.Desc" runat="server" />
<%
}
%>
</label>
</div>
<div id="crmTabBar_div" class="ms-crm-TabBar-Cell dlg_query_build_div_Container" >
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
</div>
<div id="content_container" class="dlg_query_build_div_AdvFind">
<div class="dlg_query_build_div_fixPosition" style="height:99.5%;">
<span id="advancedFind">
<div class="ms-crm-Tab" id="tab0">
<div id="advFind_container" style="margin-bottom:1%; top:10px; bottom:30px;" class="dlg_query_build_div_fixPosition dlg_query_build_div_Container" >
<div style="position:absolute; width:100%; height:100%;">
<cnt:AppAdvancedFind id="lqAdvFind" QueryListVisible=true TitleVisible=false IncludeAPIQuery=false runat="Server"/>
</div>
</div>
<%

if(!lqAdvFind.Disabled)
{
%>
<div id="buttons_container" class="dlg_query_build_div_fixPosition dlg_query_build_div_Container" style="bottom:0px;" >
<table style="width:100%;">
<tr>
<td style="width:100%">
<div class="dlg_query_build_BackBtn">
<cui:Button ID="btnRun" onclick="ExecuteQuery()" runat="server"></cui:Button>
</div>
<%

if(Request.QueryString["InvokeType"] == listQueryUseAction)
{
%>
<div class="dlg_query_build_BtnAction">
<cui:Button ID="btnUseQuery" onclick="LqAction()" runat="server"></cui:Button>
</div>
<%
}
%>
</td>
</tr>
</table>
</div>
<%
}
%>
</div>

<%

if (_privilegeCheck.CanRead)
{
%>
<div class="ms-crm-Tab" id="tab2" >
<table class="stdTable" cellpadding=0 cellspacing=0 >
<tr>
<td style="padding:10px;padding-top:0px;">
<table height="100%" width="100%" cellpadding="0" cellspacing="0" >
<tr height="34">
<td>
<table class="stdTable" cellpadding="0" cellspacing="0">
<col width="30%"><col width="20"><col width="80"><col width="30%"><col width="20"><col width="40"><col width="40%">
<tr>
<td><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
<td align="center"><span class="dlg_query_build_span_QuickFindSpacer">&nbsp;</span></td>
<td nowrap class="dlg_query_build_td_RecordType"><b style="color:#666666;"><loc:Text ResourceId="Web.Record_Type_Label" runat="server" /></b></td>
<td valign="center"><cui:Select id="crmSelectType" OnChange="FilterGridByType()" runat="server" /></td>
<td align="center"><span class="dlg_query_build_span">&nbsp;</span></td>
<td nowrap class="dlg_query_build_td_ViewSelector"><label for="crmGrid_SavedQuerySelector"><b style="color:#666666;"><loc:Text ResourceId="Web.View_Label_70" runat="server" ID="Text1" /></b></label></td>
<td><cnt:AppViewSelector runat="server" id="crmViewSelector"/></td>
</tr>
</table>
</td>
</tr>
<tr height="20">
<td width="100%"><mnu:AppGridMenuBar id="crmGridMenuBar" runat="server"/></td>
</tr>
<tr>
<td colspan="2"><cnt:AppGrid runat="server" id="crmGrid" /></td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<%
}
%>
</span>
<%

if(!lqAdvFind.Disabled)
{
%>
<span id="searchResults" style="display:none">
<div style="width:100%; height:100%;">
<div  id="results_container" class="dlg_query_build_div_fixPosition" style="top:0px;">
<iframe style="position:absolute; left:0px; right:0px;" name="resultFrame" id="resultFrame" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" width="100%" height="100%" scrolling="no"></iframe>
</div>
<div id="footer_container" class="dlg_query_build_div_fixPosition" style="bottom:0px;">
<%

if(Request.QueryString["InvokeType"] != listQueryUseAction)
{
%>
<div>
<table width="100%" style="table-layout:fixed">
<col width="26"><col>
<tr>
<td>
<input class="radio" style="border: 0px solid" type="radio" id="radOpt1" name="radOptsGroup" editable checked>
</td>
<td>
<label for="radOpt1" style="FONT-WEIGHT:<%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>;COLOR:#333333">

<% if(Request.QueryString["InvokeType"] == listQueryAddAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.AddMembers.Selected" runat="server"/>
<%
}
else if(Request.QueryString["InvokeType"] == listQueryRemoveAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.RemoveMembers.Selected" runat="server"/>
<%
}
else if(Request.QueryString["InvokeType"] == listQueryKeepAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.KeepMembers.Selected" runat="server"/>
<%
}
%>
</label>
</td>
</tr>
<tr>
<td>
<input class="radio" style="border: 0px solid" type="radio" id="radOpt2" name="radOptsGroup" editable>
</td>
<td>
<label for="radOpt2" style="FONT-WEIGHT:<%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>;COLOR:#333333">

<% if(Request.QueryString["InvokeType"] == listQueryAddAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.AddMembers.All" runat="server"/>
<%
}
else if(Request.QueryString["InvokeType"] == listQueryRemoveAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.RemoveMembers.All" runat="server"/>
<%
}
else if(Request.QueryString["InvokeType"] == listQueryKeepAction)
{
%>
<loc:Text ResourceId="MA.List.Dialogs.LQ.KeepMembers.All" runat="server"/>
<%
}
%>
</label>
</td>
</tr>
</table>
</div>
<%
}
%>
<div class="dlg_query_build_div_ActionMain">
<table>
<tr>
<td class="dlg_query_build_td_BtnAction">
<cui:Button ID="btnLqAction" OnClick="LqAction()" runat="server" ></cui:Button>
</td>
<td class="dlg_query_build_td_BackBtn">
<cui:Button ID="btnBack" OnClick="switchTo('AF')" ResourceId="AF_Btn_Back" runat="server"></cui:Button>
</td>
</tr>
</table>
</div>
</div>
</div>
</span>
<%
}
%>
</div>
</div>
</div>
<script language="Javascript">
function SetContainerTopStyle(top) {
$get('content_container').style.top = top;
}

SetContainerTopStyle($get('top_container').offsetHeight + 'px');
</script>

</body>
</html>