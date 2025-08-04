<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.RoleDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<title>
<loc:text resourceid="Web._grid.cmds.dlg_role.aspx_35" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript"  language="javascript">


var _sAction = "role";
var _iObjType = <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;
var _aOriginalRoles = new Array();
var _a = getDialogArguments();
$addHandler(window,'load',PageLoad);

function localizeActivityFeedsRole(roleXml){
var activityFeedsRoleId = '{CB269F84-E19D-E011-B66C-00155DB528B6}';
var role = XUI.Xml.SelectSingleNode(roleXml, "//roleid[text()='" + activityFeedsRoleId + "']", null);
if (role){
var nameNode = XUI.Xml.SelectSingleNode(role.parentNode, "name");
XUI.Xml.SetText(nameNode, <%=CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("Activity_Feeds_Role"))%>);
}
}

function PageLoad()
{
var oXslDoc = null;
var oXslt = CreateXslTemplate();
var oXslProc;
_a.type = "guid";
var oXml = null;
var oCommand = new RemoteCommand("OwnerManager", "GetRoles");
oCommand.SetParameter("ownerType",_iObjType);
oCommand.SetParameter("ownerIds", _a);

var oResult = oCommand.Execute();
if (oResult.Success)
{
oXml = XUI.Xml.LoadXml(oResult.ReturnValue);
localizeActivityFeedsRole(oXml);
}

XUI.Xml.Load(Mscrm.CrmUri.create("/_grid/cmds/role.xsl").toString(), false, function(xmlDoc){oXsl = xmlDoc;}, function(statusCode, xmlDoc){oXsl = null;});

oXslt.stylesheet = oXsl;

oXslProc = oXslt.createProcessor();
oXslProc.input = oXml;


oXslProc.transform();
var sHtml = oXslProc.output;
document.getElementById('divRoles').innerHTML = sHtml;

if (XUI.Xml.SelectSingleNode(oXml, "/roles/@multibusiness", null))
{
alert(LOCID_USERS_FROM_DIFF_BUS_UNIT);
}


var tableRoles = document.getElementById('tableRoles');
var nLength = tableRoles.rows.length;
for (var i=0; i < nLength; i++)
{
var oRow = tableRoles.rows[i];

if (XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).checked)
{
_aOriginalRoles.push(oRow.getAttribute("oid"));
}

}


if(tableRoles.rows.length == 0)
{
document.getElementById("butBegin").disabled = true;
document.getElementById('divRoles').innerHTML = "<table class='ms-crm-ListArea' style='text-align:center'><tr><td class='ms-crm-List-Disabled' style='valign:middle'>" + CrmEncodeDecode.CrmHtmlEncode(LOCID_NO_ROLES_FOUND) + "</td></tr></table>";
}


if(_aOriginalRoles.length == 0)
{
if(IsOutlookClient() == false)
{
if(document.getElementById('gccCrmDisclaimer').innerHTML.trim().length != 0)
{

window.top.document.getElementById("InlineDialog").style.height="400px";
window.top.document.getElementById("InlineDialog_Iframe").style.height="400px";

document.getElementById('divRoles').style.height="130px";
}
}
}
else
{

document.getElementById('gccCrmDisclaimer').style.display = "none";
}

}


function applychanges()
{

var s = "<roles>";
var rolesToAdd = "";
var rolesToRemove = "";
var fRemovingRoles = false;
var checkedRoles = 0;
var tableRoles = document.getElementById('tableRoles');
var nLength = tableRoles.rows.length;
for (var i=0; i < nLength; i++)
{
var oRow = tableRoles.rows[i];
if (XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).checked)
{
checkedRoles++;
if(!UserHadRole(oRow.getAttribute("oid")))
rolesToAdd += "<roleid bid='" + oRow.getAttribute("bid") + "'>" + oRow.getAttribute("oid") + "</roleid>";
}
else
{
if(UserHadRole(oRow.getAttribute("oid")))
rolesToRemove += "<roleid bid='" + oRow.getAttribute("bid") + "'>" + oRow.getAttribute("oid") + "</roleid>";

}
}

if (rolesToAdd.length == 0 && rolesToRemove.length == 0 )
{
closeWindow();
}

s += "<add>" + rolesToAdd + "</add>";
if (_a.length == 1)
{
if(checkedRoles == 0 && !confirm(LOCID_REMOVING_ALL_ROLES))
{
return;
}


if (rolesToRemove.length > 0 &&
UserIsModifyingOwnRole() &&
!confirm(LOCID_MODIFYING_OWN_ROLE))
{
return;
}

s += "<remove>" + rolesToRemove + "</remove>";
}
s += "</roles>";

if( s == "<roles></roles>" )
{
alert(LOCID_NO_ROLES_SELECTED);
return;
}

__dialogXml = s;
go();
}


function UserIsModifyingOwnRole()
{
var nLength = _a.length;
for (i=0; i < nLength; i++)
{
if (_a[i].toUpperCase() == USER_GUID)
return true;
}
return false;
}


function UserHadRole(sRoleId)
{
var nLength = _aOriginalRoles.length;
for (i=0; i < nLength; i++)
{
if (_aOriginalRoles[i].toLowerCase() == sRoleId.toLowerCase())
return true;
}
return false;
}


</script>
<style type="text/css">
.ms-crm-RoleouterDiv
{
width: 100%;
height: 100%;
position: absolute;
}

.ms-crm-RoleHeaderDiv
{
width: 100%;
height: 20px;
position: absolute;
}

.ms-crm-RoleGrid
{
width: 100%;
position: absolute;
bottom: 30px;
top: 20px;
}

.ms-crm-RoleGridInner
{
background-color: #ffffff;
padding: 2px;
height: 99%;
width: 99%;
position: absolute;
overflow-y: scroll;
overflow-x: hidden;
border: 1px solid #999999;
}
.ms-crm-disclaimer
{
width: 100%;
position: relative;
top: 130px;
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="ms-crm-RoleouterDiv">
<div class="ms-crm-RoleHeaderDiv">
<table width="100%" cellspacing="0" cellpadding="0" class="ms-crm-List-Header">
<col width="18">
<col width="2">
<col>
<col width="2">
<col width="200">
<col width="2">
<col width="15">
<tr>
<td>
&nbsp;
</td>
<td>
<img alt="" src="/_imgs/grid/bar_line.gif">
</td>
<th>
&nbsp;<loc:text resourceid="Web._grid.cmds.dlg_role.aspx_141" runat="server" />
</th>
<td>
<img alt="" src="/_imgs/grid/bar_line.gif">
</td>
<th>
&nbsp;<loc:text resourceid="Web._grid.cmds.dlg_role.aspx_143" runat="server" />
</th>
<td>
<img alt="" src="/_imgs/grid/bar_line.gif">
</td>
<td>
&nbsp;
</td>
</tr>
</table>
</div>
<div class="ms-crm-RoleGrid">
<div id="divRoles" class="ms-crm-RoleGridInner">
<table width="97%" height="100%" style="cursor: wait;">
<tr>
<td align="center">
<loc:text resourceid="Web._grid.cmds.dlg_role.aspx_151" runat="server" />
</td>
</tr>
</table>
</div>
<div id="gccCrmDisclaimer" class="ms-crm-disclaimer">
<%=GCCLegalDisclaimer %>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
