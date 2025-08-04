<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ShareDialogPage"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server"/>

<style type="text/css">

td.gridRecord
{
border-bottom: 1px solid #DDDDDD;
text-align:center;
overflow: hidden;
text-overflow: ellipsis;
}
.textalign
{
display:inline-block;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
DIV.container
{
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
}
.taskArea
{
width:175px;
position:absolute;
top:10px;
bottom:10px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
float:right;
<% } else { %>
float:left;
<% } %>
}

.shareGridArea
{
position:absolute;
top:10px;
bottom:10px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
right:190px;
left:1%;
<% } else { %>
left:190px;
right:1%;
<% } %>
}
</style>
<script type="text/javascript">


var _sAction = "share";
var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture)%>;

var _bToggle = false;
var _bToggleState = false;
var _a = getDialogArguments();
var _aOriginalGuids = new Array();
var _aSubmitGuids = new Array();
var _permittedCount = 0;
var _originalCount = 0;
var bRead = false;
var bWrite = false;
var bDelete = false;
var bAppend = false;
var bAssign = false;
var bShare = false;

$addHandler(window,'load',PageLoad);
var tableUsers = null;
var divUsers = null;

function PageLoad()
{
var xml = null;
var xmlhttp = new XMLHttpRequest();
var ids = "";
var rights = "";
divUsers = $get("divUsers");

_originalCount = _a.length;

for (i=0; i<_a.length; i++)
{
ids += _a[i] + ";";
}

xml = XUI.Xml.LoadXml("<share><ids>" + ids + "</ids></share>");

var oUri = Mscrm.CrmUri.create("/_grid/cmds/dlg_share.aspx");
oUri.get_query()["action"] = "retrieve";
oUri.get_query()["iObjType"] = _iObjType;
oUri.get_query()["iTotal"] = _a.length;

xmlhttp.open("POST", oUri.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp);
xmlhttp.send(xml);

if (xmlhttp.responseXML != undefined)
{
xml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(xmlhttp.responseXML));

if (handleXMLErr(xml))
{
rights = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xml, "//rights/mask", null));
_permittedCount = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xml, "//rights/count", null));
_a = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xml, "//rights/ids", null)).split(";");
}
}

if (_permittedCount == 0)
{
alert(LOCID_CANNOT_SHARE);
closeWindow();
return;
}
else if (_permittedCount != _originalCount)
{
if (!window.confirm(LOCID_DO_YOU_WANT_TO_SHARE))
{
closeWindow();
return;
}
}

bRead = (rights.charAt(0) == "1");
bWrite = (rights.charAt(1) == "1");
bDelete = (rights.charAt(2) == "1");
bAppend = (rights.charAt(3) == "1");
bAssign = (rights.charAt(4) == "1");
bShare = (rights.charAt(5) == "1");

LoadShareInfo();
}


function LoadShareInfo()
{

var oXmlDoc = null;
var oXslDoc = null;
var oXslt = CreateXslTemplate();
var oXslProc;

_aSubmitGuids = new Array();
_aOriginalGuids = new Array();

if (_originalCount == 1)
{
var xmlHttp = new XMLHttpRequest();
var submitUrl = Mscrm.CrmUri.create("/_grid/cmds/getshareaccess.aspx");
submitUrl.get_query()["objtype"] = _iObjType;
submitUrl.get_query()["id"] = _a[0];

xmlHttp.open("POST", submitUrl.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(xmlHttp);
SetTokenInHeader(xmlHttp, submitUrl);
xmlHttp.send(null);
oXmlDoc = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(xmlHttp.responseXML));
}
else
{
oXmlDoc = XUI.Xml.LoadXml("<accessors><multiple/></accessors>");
}


XUI.Xml.Load(Mscrm.CrmUri.create("/_grid/cmds/getshareaccess.xsl").toString(), false, function(xmlDoc){oXslDoc = xmlDoc;}, function(statusCode, xmlDoc){oXslDoc = null;});
oXslt.stylesheet = oXslDoc;


oXslProc = oXslt.createProcessor();
oXslProc.input = oXmlDoc;


oXslProc.addParameter("Web._grid.cmds.getshareaccess.xsl_37", LOCID_RECORD_IS_NOT_SHARED);
oXslProc.addParameter("Web._grid.cmds.getshareaccess.xsl_30", LOCID_SHARE_ONLY_ONE);
oXslProc.addParameter("GetShareAccess.OrganizationOwned", LOCID_SHARE_ORG_OWNED);


oXslProc.transform();
divUsers.innerHTML =  oXslProc.output;

var imgpath = "";
var arraylength = 0;
tableUsers = $get("tableUsers");

for(i=0; i<tableUsers.rows.length; i++)
{
arraylength = _aOriginalGuids.length;
_aOriginalGuids[arraylength] = new Array();
_aOriginalGuids[arraylength][0] = tableUsers.rows[i].getAttribute("oid");
imgpath = XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[1]).src;
_aOriginalGuids[arraylength][1] = imgpath.substring(imgpath.lastIndexOf("_")+1, imgpath.indexOf(".gif"));





if (!(bRead && bShare)) XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[3]).disabled = true;
if (!(bWrite && bShare)) XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[4]).disabled = true;
if (!(bDelete && bShare)) XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[5]).disabled = true;
if (!(bAppend && bShare)) XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[6]).disabled = true;
if (!(bAssign && bShare)) XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[7]).disabled = true;

if (!bShare)
{
XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[8]).disabled = true;
XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[0]).disabled = true;
}

}
}


function AddUsersToShare()
{
var callbackRef = Mscrm.Utilities.createCallbackFunctionObject("addUserToShareCallback", this, null, false);

LookupObjectsWithCallback(callbackRef, null, "multi", "8,9", 0);
}

function  addUserToShareCallback(retval)
{
var oTR = null;
var oTD = null;

if (retval == undefined) return;

var submitarraylength = 0;
var tableWarning = $get("tableWarning");
tableWarning.style.display = "none";
tableUsers.style.display = "";

for (i=0; i<retval.items.length; i++)
{
var item = retval.items[i];
var bExisting = false;

for (var j=0; j<tableUsers.rows.length; j++)
{
if (tableUsers.rows[j].getAttribute("oid") == item.id)
{
bExisting = true;
break;
}
}

if (!bExisting)
{

oTR = tableUsers.insertRow(-1);
oTR.height = "25";
oTR.setAttribute("oid", item.id);


for (var j=0; j<_aOriginalGuids.length; j++)
{
if (_aOriginalGuids[j][0] == item.id)
{
oTR.setAttribute("rights", "0");
}
}

if (oTR.getAttribute("rights") == undefined) oTR.setAttribute("rights","-1");

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='se' onclick='selectUser()' id='" + item.id + "_selectUser' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(LOCID_TITLE_SELECTUSERTEAM) + "'/>";
if (!bShare) XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<img alt='' src='/_imgs/ico_18_" + CrmEncodeDecode.CrmHtmlAttributeEncode(item.type) + ".gif'>";

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<nobr class='textalign' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(item.name) + "'>" + CrmEncodeDecode.CrmHtmlEncode(item.name) + "</nobr>";

oTD = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='r' onclick='requireRead(new Sys.UI.DomEvent(event))' id='" + item.id + "_read' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(formatString(LOCID_FMT_SHARECHECKBOX, LOCID_PRIVILEGE_READ, item.name)) + "'/>";
if (!(bRead && bShare))
{
XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;
}
else
{
XUI.Html.DomUtils.GetFirstChild(oTD).checked = true;
}

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='w' onclick='requireRead(new Sys.UI.DomEvent(event))' id='" + item.id + "_write' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(formatString(LOCID_FMT_SHARECHECKBOX, LOCID_PRIVILEGE_WRITE, item.name)) + "'/>";
if (!(bWrite && bShare)) XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='d' onclick='requireRead(new Sys.UI.DomEvent(event))' id='" + item.id + "_delete' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(formatString(LOCID_FMT_SHARECHECKBOX, LOCID_PRIVILEGE_DELETE, item.name)) + "'/>";
if (!(bDelete && bShare)) XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='ap' onclick='requireRead(new Sys.UI.DomEvent(event))' id='" + item.id + "_append' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(formatString(LOCID_FMT_SHARECHECKBOX, LOCID_PRIVILEGE_APPEND, item.name)) + "'/>";
if (!(bAppend && bShare)) XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;

oTD  = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='as' onclick='requireRead(new Sys.UI.DomEvent(event))' id='" + item.id + "_assign' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(formatString(LOCID_FMT_SHARECHECKBOX, LOCID_PRIVILEGE_ASSIGN, item.name)) + "'/>";
if (!(bAssign && bShare)) XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;

oTD = oTR.insertCell(-1);
oTD.innerHTML = "<input type='checkbox' class='checkbox' chkType='sh' onclick='requireRead(new Sys.UI.DomEvent(event))' id='" + item.id + "_share' title='" + CrmEncodeDecode.CrmHtmlAttributeEncode(formatString(LOCID_FMT_SHARECHECKBOX, LOCID_PRIVILEGE_SHARE, item.name)) + "'/>";
if (!bShare) XUI.Html.DomUtils.GetFirstChild(oTD).disabled = true;

for (var j=0; j<oTR.cells.length; j++)
{
oTR.cells[j].className = "gridRecord";
}

submitarraylength = _aSubmitGuids.length;
_aSubmitGuids[submitarraylength] = new Array();
_aSubmitGuids[submitarraylength][0] += item.id;
_aSubmitGuids[submitarraylength][1] += item.type;
}
}
}


function RemoveUsersFromShare()
{
var bAtLeastOne = false;

var tableUsersFirstChildNextSibling = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild(tableUsers));


for (var i=0; i<tableUsers.rows.length; i++)
{
var curRowCell = XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[0]);
while (curRowCell != null && curRowCell.checked)
{
for (var j=0; j<_aSubmitGuids.length; j++)
{
if (_aSubmitGuids[j][0] == tableUsers.rows[i].getAttribute("oid"))
{
_aSubmitGuids.splice(j, 1);
}
}
tableUsers.deleteRow(i);
bAtLeastOne = true;
if (tableUsers.rows[i] == null)
break;
curRowCell = XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[0]);
}

if (tableUsers.rows[i] == null)
break;
}

if (tableUsers.rows.length == 0)
{
$get("tableWarning").style.display = "";
tableUsers.style.display = "none";
}

if (!bAtLeastOne)
{
alert(LOCID_NO_RECORDS_SELECTED);
}


selectUser();
}


function cancel()
{
closeWindow();
}


function applychanges()
{
var rowLen	= tableUsers.rows.length;
var colLen	= null;
var cols 	= null;
var retval	= "<root>";

for (var i=0; i<rowLen; i++)
{
var accessrights = 0;
var tempVal = "<assignee>";

cols = tableUsers.rows[i].cells;
colLen = cols.length;

for (j=1; j<colLen; j++)
{
var childNode = XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[j]);

if (j >= 3 && childNode.checked)
{
switch(childNode.getAttribute("chkType"))
{
case "r":
accessrights += <%=PrivilegeId.Read.ToString("D")%>;
break;

case "w":
accessrights += <%=PrivilegeId.Write.ToString("D")%>;
break;

case "d":
accessrights += <%=PrivilegeId.Delete.ToString("D")%>;
break;

case "ap":
accessrights += <%=(PrivilegeId.Append | PrivilegeId.AppendTo).ToString("D")%>;
break;

case "as":
accessrights += <%=PrivilegeId.Assign.ToString("D")%>;
break;

case "sh":
accessrights += <%=PrivilegeId.Share.ToString("D")%>;
break;
}
}
else if (j == 1)
{
tempVal += "<assigneeid>" + tableUsers.rows[i].getAttribute("oid") + "</assigneeid><type>";
var typeVal = XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[j]).src;
tempVal += typeVal.substring(typeVal.lastIndexOf("_")+1, typeVal.indexOf(".gif")) + "</type>";



for (var z=0; z<_aOriginalGuids.length; z++)
{
if (_aOriginalGuids[z][0] == tableUsers.rows[i].getAttribute("oid"))
{
_aOriginalGuids.splice(z, 1);
break;
}
}
}
}

if ((accessrights == 0) && (tableUsers.rows[i].getAttribute("rights") == -1))
{

tempVal = "";
}
else if (accessrights == tableUsers.rows[i].getAttribute("rights"))
{
for (k=0; k<_aOriginalGuids.length; k++)
{
if (_aOriginalGuids[k])
{
if (_aOriginalGuids[k][0] == tableUsers.rows[i].getAttribute("oid"))
{
_aOriginalGuids.splice(k, 1);
}
}
}
tempVal = "";
}
else
{
tempVal += "<accessrights>" + accessrights + "</accessrights><originalrights>" + tableUsers.rows[i].getAttribute("rights") + "</originalrights></assignee>"
retval += tempVal;
}

}



for (i=0; i<_aOriginalGuids.length; i++)
{
if (_aOriginalGuids[i])
{
retval += "<assignee><assigneeid>" + _aOriginalGuids[i][0] + "</assigneeid><type>" + _aOriginalGuids[i][1] + "</type><accessrights>0</accessrights></assignee>";
}
}
retval += "</root>";



__dialogXml = retval;

go();
}


function SelectAll(event)
{
for (i=0; i<tableUsers.rows.length; i++)
{
XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[0]).checked = event.target.checked;
}
}

function ToggleAll()
{
_bToggleState = !_bToggleState;
var tLength = tableUsers.rows.length;
var bAtLeastOne = false;

for (i=0; i<tLength; i++)
{
if (XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[0]).checked)
{
bAtLeastOne = true;
for (j=3; j<=8; j++)
{
if (!XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[j]).disabled)
{
XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[j]).checked = _bToggleState;
}
}
}
}

if (tLength == 0)
{
$get("tableWarning").style.display = "";
tableUsers.style.display = "none";
}

if (!bAtLeastOne)
{
alert(LOCID_NO_RECORDS_SELECTED);
}
}


function selectUser()
{
if (tableUsers.rows.length == 0)
{
$get("chkSelectAll").checked = false;
return;
}

for (i=0; i<tableUsers.rows.length; i++)
{
if (!XUI.Html.DomUtils.GetFirstChild(tableUsers.rows[i].cells[0]).checked)
{
$get("chkSelectAll").checked = false;
return;
}
}

$get("chkSelectAll").checked = true;
}


function requireRead(event)
{
var oTR = event.target.parentNode.parentNode;

var checkType = event.target.getAttribute("chkType");
if (((checkType == 'as') || (checkType == 'd')) && (event.target.checked))
{
XUI.Html.DomUtils.GetFirstChild(oTR.cells[3]).checked = true;
XUI.Html.DomUtils.GetFirstChild(oTR.cells[4]).checked = true;
}
if ((checkType == 'w') && (!event.target.checked))
{
XUI.Html.DomUtils.GetFirstChild(oTR.cells[5]).checked = false;
XUI.Html.DomUtils.GetFirstChild(oTR.cells[7]).checked = false;
}
if (checkType == 'r')
{
if (!event.target.checked)
{
for (var i=4; i<=8; i++)
{
XUI.Html.DomUtils.GetFirstChild(oTR.cells[i]).checked = false;
}
}
return;
}
else
{
XUI.Html.DomUtils.GetFirstChild(oTR.cells[3]).checked = true;
}

_bToggle = true;
_bToggleState = false;
}


function RenderToolTip(event)
{
var o = event.target;

if (o && o.tagName == "NOBR" && o.title == "" && XUI.Html.GetText(o) != "")
{
o.title = XUI.Html.GetText(o);
}
}

</script>

</head>
<body>

<frm:DialogForm id="crmForm" runat="server">
<div class="taskArea">
<div class="container">
<crm:TaskBox id="taskbox" Width="165px" runat="server"/>
</div>
</div>
<div class="shareGridArea">
<div class="container" style="min-width:530px;">
<div style="position:absolute;height:21px;top:0px;width:100%;">
<table id="tableUsersHeader" cellspacing="0" cellpadding="0" class="ms-crm-Share-Header">
<col width="35"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<col width="68"/>
<col width="2"/>
<tr onmouseover="RenderToolTip(new Sys.UI.DomEvent(event));">
<td><input type="checkbox" class="checkbox" id="chkSelectAll" name="chkSelectAll" onclick="SelectAll(new Sys.UI.DomEvent(event))" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Grid.CheckAll.UsersTeams.Title' runat='server'/>"/></td>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"/></td>
<th class="user-Header"><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_448" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_449" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_450" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_451" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_452" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_453" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"></td>
<th><nobr><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_454" runat="server"/></nobr></th>
<td role="presentation"><img alt="" src="/_imgs/grid/bar_line.gif"/></td>
</tr>
</table>
</div>
<div style="position:absolute;width:100%;top:21px;bottom:2px;">
<div id="divUsers" style="background-color: #ffffff; height:100%; width:100%; overflow-y:auto; border:1px solid #999999;position:absolute;top:0px;left:0px;">
<table width="100%" height="100%" style="cursor:wait;">
<tr>
<td align="center"><loc:Text ResourceId="Web._grid.cmds.dlg_share.aspx_468" runat="server"/></td>
</tr>
</table>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
