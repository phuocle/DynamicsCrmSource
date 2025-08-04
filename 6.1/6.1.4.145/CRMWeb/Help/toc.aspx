<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.Toc.TocPage"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
<style type="text/css">

table
{
width: 100%;
table-layout: fixed;
}

</style>

<script type="text/javascript">

var _oXml = null;
var _oXsl = null;

Sys.Application.add_load(PageLoad);

function PageLoad()
{
_oXml = XUI.Xml.LoadXml(CrmEncodeDecode.CrmXmlDecode(HELP_TOC_XML));

_oXsl = XUI.Xml.LoadXml(CrmEncodeDecode.CrmXmlDecode(HELP_TOC_XSL));

var oXslTemplate = CreateXslTemplate();
oXslTemplate.stylesheet = _oXsl;

var oXslProc = oXslTemplate.createProcessor();
oXslProc.input = _oXml;
oXslProc.addParameter("lcid", CrmEncodeDecode.CrmUrlEncode(USER_HELP_LCID));
oXslProc.addParameter("helpSku", CrmEncodeDecode.CrmUrlEncode(HELP_SKU));
oXslProc.addParameter("helpVersionPath", CrmEncodeDecode.CrmUrlEncode(HELP_VERSION_PATH));

<%
String topic = Request.QueryString["topic"];

if (topic != null && topic != String.Empty)
{
Response.Write(@"oXslProc.addParameter(""autoLoadTopic"",""" + Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(topic) + @""");");
}
%>
oXslProc.transform();

divTOC.innerHTML = oXslProc.output;


<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
var iTotal = window.frameElement.width + XUI.Html.DomUtils.GetPrevSibling(window.frameElement).width;
<% } else {%>
var iTotal = window.frameElement.width + XUI.Html.DomUtils.GetNextSibling(window.frameElement).width;
<% } %>


if (window.frameElement.width > 0 && iTotal < 567)
{
var i = 567 - iTotal;
top.resizeBy(i, 0);
top.moveBy(i * -1, 0);
}




if (typeof(top.document.getElementById("helpContents").syncToc) != "undefined")
{
top.document.getElementById("helpContents").syncToc();
}
}

function toggleWithoutRedirect(o)
{
var oRow = XUI.Html.DomUtils.GetNextSibling(o.parentNode.parentNode.parentNode.parentNode);

if (oRow.style.display != "none")
{
XUI.Html.DomUtils.GetFirstChild(o.cells[0]).src = "/help/imgs/16_closedBook.gif";
oRow.style.display = "none";
o.setAttribute("expanded",false);
}
else
{
var oTD = o.cells[1];


var sSelect = XUI.Html.GetText(oTD).replace(/'/g,"\\'");
var sTmp = "";

var code = o.getAttribute("code");
switch (o.getAttribute("level"))
{

case "0": sSelect = "/books/volume[@name='" + sSelect + "' and @code='" + code.replace(/'/g,"\\'") + "']/chapter";		break;
case "1": sSelect = "/books/volume/chapter[@name='" + sSelect + "' and ../@code='" + code.replace(/'/g,"\\'") + "']/page";	break;
}

if (sSelect == "")
{
var oNodeList = XUI.Xml.SelectNodes(_oXml, sSelect, null);
var iLen = oNodeList.length;

for (var i = 0; i < iLen; i++)
{
sTmp += oNodeList.item(i).transformNode(_oXsl);
}

oTD.innerHTML = sTmp;
}

XUI.Html.DomUtils.GetFirstChild(o.cells[0]).src = "/help/imgs/16_openBook.gif";
oRow.style.display = "";
o.setAttribute("expanded",true);
o.scrollIntoView(true);
}
}

function toggle(o)
{
contentArea = parent.document.getElementById("contentArea");
if (!IsNull(o.href) && o.href.length > 0)
{
$get("helpContents", contentArea).src = o.href;
}

toggleWithoutRedirect(o);
}

var _oLastSelectedPage = null;

function selectArticle(oItem)
{

if (!IsNull(oItem.length))
{

oItem = oItem[0];
}

var oTable = oItem;


if (oItem.tagName != "TABLE")
{
oTable = oItem.parentNode.parentNode.parentNode.parentNode;
}

if (!IsNull(_oLastSelectedPage))
{
_oLastSelectedPage.className = "tocPageOff";
}

oTable.className = "tocPageOn";
_oLastSelectedPage = oTable;

oItem.blur();
}


function getTopicRecursively(element, sTopic, inExpanded)
{
if (IsNull(element))
{
return null;
}


if (inExpanded && element.style != null && element.style.display == "none")
{
return null;
}


if (element.tagName == "TABLE" && element.getAttribute("id") == sTopic)
{
return element;
}


var childs = element.childNodes;
var iCount = childs.length;
for (var i = 0; i < iCount; i++)
{
var result = getTopicRecursively(childs[i], sTopic, inExpanded);
if (result != null)
{
return result;
}
}

return null;
}


function findTopic(sTopic, inExpanded)
{
var root = document.getElementById("divTOC");
if (IsNull(root))
{
return null;
}

return getTopicRecursively(root, sTopic, inExpanded);
}

function findArticle(sTopic)
{

if (!IsNull(_oLastSelectedPage))
{

var selectedId = _oLastSelectedPage.getAttribute("id");
if (selectedId == sTopic)
{
return;
}


var parent = _oLastSelectedPage.parentNode;
var childs = parent.childNodes;
var iCount = childs.length;
for (var i = 0; i < iCount; i++)
{
if (childs[i].getAttribute("id") == sTopic)
{
selectArticle(parent.childNodes[i]);
return;
}
}
}


var o = findTopic(sTopic, true);
if (IsNull(o))
{

o = findTopic(sTopic, false);
}

if (IsNull(o))
{

return;
}


var oItem = o;

selectArticle(o);

while (!IsNull(o) && o.tagName != "BODY")
{
if (o.tagName == "TBODY" && !IsNull(XUI.Html.DomUtils.GetFirstChild(o).getAttribute("level")))
{
var oTR = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(o).cells[0]).rows[0];


if (IsNull(oTR.getAttribute("expanded")) || oTR.getAttribute("expanded") == false)
{

toggleWithoutRedirect(oTR);


oItem.scrollIntoView(true);
}
}

o = o.parentNode;
}
}

</script>
</head>
<body class="Helptoc_body" style="height:auto;">
<div class="heading">
<b class="ms-crm-Help-Toc-Heading"><loc:Text ResourceId="Web.Help.toc.aspx_72" runat="server"/></b>
</div>
<div id="divTOC"></div>
</body>
</html>