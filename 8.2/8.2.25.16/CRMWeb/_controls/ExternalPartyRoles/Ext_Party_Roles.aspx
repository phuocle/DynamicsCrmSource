
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.ExternalParty.RoleDetailPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="System.Web" %>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
.ms-crm-TabMargin {
margin-left: 1%;
margin-right: 1%;
margin-top: 1%;
margin-bottom: 1%;
}
</style>
<script language="javascript" type="text/javascript">
var _oSrc = "/_imgs/ico_18_role_";
var _bSaving = false;
<%= RefreshParentGridScript %>

var _roleFormReadOnlyOrDisabled = <%= (crmForm.ReadOnly || crmForm.Disabled || _isSystemAdministrator) ? "true" : "false" %>;

Sys.Application.add_load(PageLoad);
function PageLoad()
{


if(!_roleFormReadOnlyOrDisabled)
{
var crmFormCtrl = $find("crmForm");
crmFormCtrl.add_onSave(Save);
crmFormCtrl.add_onClose(Close);
}

InitializeRoleControl();



if ($get('crmFormSubmitId', $get('crmFormSubmit')).value == "")
{
CreatePrivilegeValue();
}

window.setTimeout(SetFocusOnName, 0);
window.setTimeout( clearNameControlNotification, 1000 );


Xrm.Page.data = new Object();
Xrm.Page.data.entity = new Object();
Xrm.Page.data.entity.getId = function() { return crmFormSubmit.crmFormSubmitId.value; }

}

function SetFocusOnName()
{
var NameControl = window.parent.Xrm.Page.ui.controls.getByName('name');
NameControl.setFocus();

}
function clearNameControlNotification()
{
var NameControl = window.parent.Xrm.Page.ui.controls.getByName('name');
NameControl.clearNotification();

}

function Close(sender, oArg)
{
return;
}
function Save(sender, args)
{
CreatePrivilegeValue();
try {
var CAPService = new RemoteCommand("ChannelAccessProfile", "SavePrivilege");
CAPService.SetParameter("privilege", Mscrm.FormControlInputBehavior.GetBehavior("privilegeinfo").get_dataValue());
CAPService.SetParameter("channelAccessProfileId", $get('crmFormSubmitId').value);
CAPService.Execute();
}
catch (ex) {
}
}

function Clone()
{
copyRole($get('crmFormSubmitId', $get('crmFormSubmit')).value);

try
{
window.opener.auto(Role);
}
catch(e)
{}
}
function Validate(roleName)
{


var PRIVILEGE_CREATEUSER 			= "{0A3D4421-AF6D-42ED-B3C2-B51DEB73D1D5}";
var PRIVILEGE_CREATEUSERSETTINGS	= "{E3AF716C-2B32-4E53-9554-24C36AA0A3AD}";
var cu_depth, cus_depth;
var bUserSettingsError = false;

var privs = Mscrm.FormControlInputBehavior.GetBehavior("privilegeinfo").get_dataValue();
privs = privs ? privs.toUpperCase() : "";

if (privs.indexOf(PRIVILEGE_CREATEUSER) != -1)
{
if (privs.indexOf(PRIVILEGE_CREATEUSERSETTINGS) == -1)
{


bUserSettingsError = true;
}
else
{

cu_depth = privs.substr(privs.indexOf(PRIVILEGE_CREATEUSER)+PRIVILEGE_CREATEUSER.length + 1, 1);
cus_depth = privs.substr(privs.indexOf(PRIVILEGE_CREATEUSERSETTINGS)+PRIVILEGE_CREATEUSERSETTINGS.length + 1, 1);

if (GetDepth(cus_depth) < GetDepth(cu_depth))
{


bUserSettingsError = true;
}
}
}
if (bUserSettingsError)
{
if (!window.confirm(LOCID_NO_CREATEUSER_PRIV_TITLE + "\n\n" + LOCID_NO_CREATEUSER_PRIV_OK + "\n" + LOCID_NO_CREATEUSER_PRIV_CANCEL))
{
return false;
}
}
return true;
}


function InitializeRoleControl()
{
var aoImg = $get("crmForm").getElementsByTagName("IMG");
var nLength = aoImg.length;


for (var i = 0; i < nLength; i++)
{
var id   = aoImg[i].getAttribute("id");
if (isNullOrEmptyString(id))
continue;

var oImg = $get(id);

if (!IsNull(oImg) && oImg.className == 'i' && IsNull($find(id)))
{
crmCreate(Mscrm.RoleItemControl, null, null, null, oImg);
}
}
}


function CreatePrivilegeValue()
{
var retval = "",
crmForm = $get("crmForm"),
aoImg   = crmForm.getElementsByTagName("IMG"),
nLength = aoImg.length;


for (var i = 0; i < nLength; i++)
{
var id = aoImg[i].getAttribute("id");
if (isNullOrEmptyString(id))
{
continue;
}

var role = $find(id);
if (IsNull(role))
{
continue;
}

var privilegeDepth = role.get_privilegeDepth();

if (IsNull(privilegeDepth))
{
continue;
}

retval += role.get_privilegeValue();
}

<%
if (privilegesNotOnUI == null || privilegesNotOnUI.Length == 0)
{
%>

retval = retval.substring(0, retval.length-1);
Mscrm.FormControlInputBehavior.GetBehavior("privilegeinfo").set_dataValue(retval);
<%
}
else
{
%>

Mscrm.FormControlInputBehavior.GetBehavior("privilegeinfo").set_dataValue((retval + <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(privilegesNotOnUI.ToString()) %>));
<%
}
%>
}


function ProcessClick(ev)
{
if (_bSaving || _roleFormReadOnlyOrDisabled) return false;
var o = Mscrm.Utilities.getEventElement(ev);
var oFirstChild = XUI.Html.DomUtils.GetFirstChild(o);
while((o.tagName != "IMG") && (oFirstChild != null))
{
o = oFirstChild;
oFirstChild = XUI.Html.DomUtils.GetFirstChild(o);
}


if(IsNull(o) || o.tagName != 'IMG' || o.className != 'i'){
return;
}
var role = $find(o.getAttribute("id"));
if (!IsNull(role.get_privilegeDepth()) && o.tagName == "IMG")
{
IncrementCellUI(o, true);
}
}


function SetAltText(ev)
{
if (_bSaving) return false;
var o = Mscrm.Utilities.getEventElement(ev);
if (o.tagName == "TD" && o.cellIndex == 0 && o.parentNode.rowIndex != 0 && o.className == "h")
{
o.setAttribute("title", LOCID_TOGGLE_ROW_PRIV);
return;
}
else if (o.tagName != "IMG")
{
return;
}
}


function ToggleColumnCells(oTable, nColumn)
{
var oRows = oTable.getElementsByTagName('TR');
var nRows = IsNull(oRows)?0:oRows.length;

var nNext = _iPrivilegeLevelGlobal;

var bReset = true;
var oaCells = [];


for (var i=1; i < nRows; i++)
{


var oCells = oRows[i].getElementsByTagName('TD');
var oCurrent = XUI.Html.DomUtils.GetFirstChild(oCells[nColumn]);
if (!IsNull(oCurrent) && !IsNull(oCurrent.tagName) && oCurrent.tagName == "A")
{

oCurrent = XUI.Html.DomUtils.GetFirstChild(oCurrent);
if(IsNull(oCurrent) || oCurrent.tagName != 'IMG' || oCurrent.className != 'i')
{
continue;
}
var role = $find(oCurrent.getAttribute("id"));
var currPrivilege = role.get_privilegeDepth();
if(!IsNull(currPrivilege))
{
var nLevel   = currPrivilege;


if (nLevel < role.get_max())
{
nLevel = role.get_nextPrivilege();


if (nLevel <= nNext && nLevel != role.get_min())
{
nNext			= nLevel;
bReset			= false;
}
}


oaCells[i-1] = oCurrent;
}
}
}

UpdateCells(oaCells, nNext, bReset);
}


function ToggleRowCells(oRow)
{
var oCells  = oRow.getElementsByTagName('TD');
var nCells  = IsNull(oCells)?0:oCells.length;


var nNext	= _iPrivilegeLevelGlobal;

var bReset	= true;
var oaCells = new Array();


for (var i=1; i < nCells; i++)
{


var oCurrent = XUI.Html.DomUtils.GetFirstChild(oCells[i]);
if (!IsNull(oCurrent) && !IsNull(oCurrent.tagName) && oCurrent.tagName == "A")
{

oCurrent = XUI.Html.DomUtils.GetFirstChild(oCurrent);
if(IsNull(oCurrent) || oCurrent.tagName != 'IMG' || oCurrent.className != 'i'){
continue;
}
var role = $find(oCurrent.getAttribute("id"));
if(!IsNull(role.get_privilegeDepth()))
{
var nLevel   = role.get_privilegeDepth();


if (nLevel < role.get_max())
{
nLevel = role.get_nextPrivilege();


if (nLevel <= nNext && nLevel != role.get_min())
{

nNext			= nLevel;
bReset			= false;
}
}


oaCells[i-1] = oCurrent;
}
}
}

UpdateCells(oaCells, nNext, bReset);
}


function UpdateCells(oaCells, nNext, bReset)
{


for (nCell in oaCells)
{
var oCell = oaCells[nCell];
var role = $find(oCell.getAttribute("id"));
if (bReset)
{
role.reset();
}
else if (!IsNull(role.get_nextPrivilege()) && role.get_nextPrivilege() <= nNext)
{


IncrementCellUI(oCell, false);
}
}
}


function IncrementCellUI(oImg, bReset)
{
oImg = $find(oImg.getAttribute("id"));
if (IsNull(oImg) || IsNull(oImg.get_privilegeDepth()))
{
return null;
}
if (oImg.get_privilegeDepth() < oImg.get_max())
{
oImg.set_privilegeDepth(oImg.get_nextPrivilege());
}
else if (!IsNull(bReset) && bReset)
{


oImg.reset();
}


Mscrm.FormControlInputBehavior.GetBehavior("privilegeinfo").set_dataValue("dirty");

if(!window.parent.Xrm.Page.data.entity.getIsDirty())
{
var haveprivilegeschanged = window.parent.Xrm.Page.getAttribute('haveprivilegeschanged');
if(haveprivilegeschanged != null)
{
haveprivilegeschanged.setValue(!haveprivilegeschanged.getValue());
}
window.parent.Xrm.Page.data.setFormDirty(true);
}
}


function GetTitle(nDepth)
{
switch (nDepth)
{
case _iPrivilegeLevelNone:
return LOCID_BIZ_ROLE_NONE;
case _iPrivilegeLevelBasic:
return LOCID_BIZ_ROLE_BASIC;
case _iPrivilegeLevelLocal:
return LOCID_BIZ_ROLE_LOCAL;
case _iPrivilegeLevelGlobal:
return LOCID_BIZ_ROLE_GLOBAL;
default:
return "";
}
}

function GetPrivilegeString(iDepth)
{
switch (iDepth)
{
case _iPrivilegeLevelNone:
return _sPrivilegeLevelNone;
case _iPrivilegeLevelBasic:
return _sPrivilegeLevelBasic;
case _iPrivilegeLevelLocal:
return _sPrivilegeLevelLocal;
case _iPrivilegeLevelGlobal:
return _sPrivilegeLevelGlobal;
default:
return "";
}
}


function GetEncodedPrivilegeAltTag(objectTypeName, privilegeTypeCode, currentPrivilegeDepth)
{
return formatString(LOCID_FORMAT_ALTTAG, GetTitle(currentPrivilegeDepth));
}

function GetEncodedMiscPrivilegeAltTag(privilegeName, currentPrivilegeDepth)
{
return formatString(LOCID_FORMAT_ALTTAGMISC, privilegeName, GetTitle(currentPrivilegeDepth));
}
function GetDisplayPrivilegeType(privilegeTypeCode)
{
switch (privilegeTypeCode)
{
case _sPrivilegeColCreate:
return LOCID_PRIVTYPE_CREATE;
case _sPrivilegeColRead:
return LOCID_PRIVTYPE_READ;
case _sPrivilegeColWrite:
return LOCID_PRIVTYPE_WRITE;
default:
return "";
}
}


function GetDepth(sDepth)
{
switch (sDepth)
{
case _sPrivilegeLevelNone:
return _iPrivilegeLevelNone;
case _sPrivilegeLevelBasic:
return _iPrivilegeLevelBasic;
case _sPrivilegeLevelLocal:
return _iPrivilegeLevelLocal;
case _sPrivilegeLevelGlobal:
return _iPrivilegeLevelGlobal;
default:
return -1;
}
}


function ToggleRow(o)
{
if(_roleFormReadOnlyOrDisabled) return false;


var oTR = o;
while (oTR.tagName != "TR")
{
oTR = oTR.parentNode;
}
ToggleRowCells(oTR);
}


function ToggleColumn(o)
{
if(_roleFormReadOnlyOrDisabled) return false;


var oTable = o;
while (oTable.tagName != "TABLE")
{
oTable = oTable.parentNode;
}
ToggleColumnCells(oTable, o.cellIndex);
}
function BlockEnter(ev)
{
switch (ev.keyCode)
{
case KEY_ENTER:
ev.preventDefault();
}
}
</script>
<style type="text/css">
div.savingMsg {
width: 350px;
height: 150px;
filter: progid:DXImageTransform.Microsoft.Shadow(Direction=135, Color='#666666', Strength=4);
background-color: #ffffee;
border: 2px solid #000000;
position: absolute;
top: 160px;
}

td.h {
cursor: pointer;
}

td.header-row-column {
cursor: pointer;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width: 100%;
}

table.ms-crm-Form-Area {
width: 100%;
border-bottom: 1px solid #dddddd;
table-layout: fixed;
empty-cells: hide;
}

IMG.i {
cursor: pointer;
}

TR.ms-crm-TitleRowBkgd {
text-align: center;
}

.ms-crm-Form-FormFrameBkgd {
position: absolute;
top: 0px;
bottom: 80px;
left: 10px;
right: 10px;
}

.ms-crm-Tab {
overflow-x: hidden;
}

.ms-crm-Form-Background {
position: absolute;
top: 120px;
bottom: 16px;
width: 100%;
}

.legend {
position: absolute;
height: 50px;
bottom: 0px;
left: 20px;
right: 20px;
}
</style>
</head>
<body>






<div>
<div>
<frm:HardcodedForm id="crmForm" SupportsDefaultData="true" runat="server">
<sdk:HiddenInputControl id="privilegeinfo" runat="server" />
<div>
<cnt:AppNotifications id="Notifications" runat="server" />
</div>
<table onmouseover="SetAltText(new Sys.UI.DomEvent(event));">
<tr style="display: flex;">
<% if(IsNewProfile()) { %>
<td style="width: 681px" title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Entity_Permission_New_Profile_Message")) %>"><%= RenderRoleEditor() %></td>
<% } %>
<% else { %>
<td style="width: 681px"><%= RenderRoleEditor() %></td>
<% } %>
<td style="width: 35%;vertical-align: top;">
<% if(!IsNewProfile()) { %>
<fieldset>
<legend>&nbsp;<span class="ms-crm-Emphasis-Strong"><loc:Text ResourceId="Web.Biz.Roles.edit_role.aspx_1073" runat="server" /></span>&nbsp;</legend>
<table>
<tr>
<td>
<img alt="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_none_tooltip")) %>" src="/_imgs/ico_18_role_X.gif"></td>
<td title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_none_tooltip")) %>">
<loc:Text ResourceId="Web.Biz.Roles.edit_role.aspx_externalparty_none" runat="server" />
</td>
<td style="padding-left: 90px">
<img alt="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_basic_tooltip")) %>" src='/_imgs/ico_18_role_B.gif'></td>
<td title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_basic_tooltip")) %>">
<loc:Text ResourceId="Web.Biz.Roles.edit_role.aspx_externalparty_basic" runat="server" />
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>
<img alt="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_local_tooltip")) %>" src='/_imgs/ico_18_role_L.gif'></td>
<td title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_local_tooltip")) %>">
<loc:Text ResourceId="Web.Biz.Roles.edit_role.aspx_externalparty_local" runat="server" />
</td>
<td style="padding-left: 90px">
<img alt="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_global_tooltip")) %>" src='/_imgs/ico_18_role_G.gif'></td>
<td title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Biz.Roles.edit_role.aspx_externalparty_global_tooltip")) %>">
<loc:Text ResourceId="Web.Biz.Roles.edit_role.aspx_externalparty_global" runat="server" />
</td>
</tr>
</table>
<% } %>
</fieldset>
</td>
</tr>
</table>
</frm:HardcodedForm>
</div>
</div>

</body>
</html>
