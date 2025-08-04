<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.SubjectManager.Home" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader runat="server" id="crmHeader" />
<script language="javascript">

var _selectedSubject;
var _selectedName;

function answersRetrv(sender, o) {
if (IsNull(o)) {
_selectedSubject = _selectedName = null;
}
else {
_selectedSubject = o.get_id();
_selectedName = o.get_name();
}
}

function DeleteSubject() {
if (_selectedSubject) {
if (window.confirm(LOCID_SUBJED_CONFIRMDELETE)) {
var command = new RemoteCommand("SubjectManager", "DeleteSubject");
command.SetParameter("id", (IsNull(_selectedSubject) || _selectedSubject == "") ? "{00000000-0000-0000-0000-000000000000}" : _selectedSubject);
var result = command.Execute();

if (result.Success) {
window.location.reload(true);
}
}
}
}


function handleEnter(domEventObject) {
if (KEY_ENTER == domEventObject.keyCode) {
AddSubject(true);
}
}

function AddSubjectIPAD(bEdit) {
if (Mscrm.Utilities.isIosDevice())
AddSubject(bEdit);
}
function AddSubjectWeb(bEdit) {
if (!Mscrm.Utilities.isIosDevice())
AddSubject(bEdit);
}
function AddSubject(bEdit) {
var url = "/Tools/SubjectManager/dialogs/edit.aspx";
if (!_selectedSubject && bEdit) {
alert(LOCID_SUBJED_SELECTSUBJ);
return false;
}

if (bEdit) {
url += "?id=" + CrmEncodeDecode.CrmUrlEncode(_selectedSubject);
}
else if (_selectedSubject) {
url += "?_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode(Subject) + "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode(_selectedSubject);
}
var parameters = new Array(bEdit, _selectedSubject);
var sResult = "Save";
var crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri.create(url), document, 450, 300, null)
crmDialog.setCallbackInfo("performActionAfterAddSubject", this, parameters)
crmDialog.show();
}
function performActionAfterAddSubject(ret_val, bEdit, _selectedSubject) {
var o = ret_val;
if (o && o.xml != "") {
var command;
if (bEdit) {
command = new RemoteCommand("SubjectManager", "UpdateSubject");
command.SetParameter("id", _selectedSubject);
}
else {
command = new RemoteCommand("SubjectManager", "CreateSubject");
}
command.SetParameter("xml", o.xml);

var result = command.Execute();

if (result.Success) {
window.location.reload(true);
}
}
}

</script>
<style type="text/css">

.ms-crm-TitleBar
{
position: absolute;
top: 0px;
height: 50px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
left: 0px;
right: 20px;
<% } else { %>
left: 20px;
right: 0px;
<% } %>
}

.ms-crm-ContentBlock
{
position: absolute;
top: 50px;
bottom: 20px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
left: 10px;
right: 20px;
<% } else { %>
left: 20px;
right: 10px;
<% } %>
}

.ms-crm-TaskBox
{
position: absolute;
top: 0px;
bottom: 0px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
width: 200px;
}


.ms-crm-TreeBox
{
position: absolute;
top: 0px;
bottom: 0px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 200px;
left: 0px;
<% } else { %>
right: 0px;
left: 200px;
<% } %>
}

.ms-crm-TreeBox tbody
{
height: inherit;
}
</style>
</head>
<body>
<div class="ms-crm-absolutePosition" style="overflow-y: auto;">
<div class="ms-crm-TitleBar SubjectEditor_td_SubTitle">
<div class="subtitle">
<loc:text resourceid="Web.Tools.SubjectEditor.SubjectEditor.aspx_135" runat="server" />
</div>
<img alt="" src="/_imgs/tools/hr.gif" align="middle" height="1" width="100%" style="margin-bottom: 10px;" />
</div>
<div class="ms-crm-ContentBlock">
<div id="divTaskBoxCont" class="ms-crm-TaskBox">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="height: 100%; width: 100%">
<crm:taskbox runat="server" id="crmTaskBox" />
</div>
</div>
</div>
<div class="ms-crm-TreeBox ">
<div class="ms-crm-Dialog-Lookup-Objects ms-crm-absolutePosition">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="height: 100%; width: 100%">
<table width="100%" height="100%" style="table-layout:fixed;" cellpadding="0" cellspacing="0">
<col>
<col width="113">
<tr>
<td style="vertical-align: top;">
<span class="ms-crm-SubjectTree-Label">
<loc:text resourceid="Web.Tools.SubjectEditor.SubjectEditor.aspx_145" runat="server" />
</span>
<br>
<div style="padding-top: 6px; color: #666666;">
<loc:text resourceid="Web.Tools.SubjectEditor.SubjectEditor.aspx_154" runat="server" />
</div>
</td>
<td style="vertical-align: bottom;">
<img alt="" src="/_imgs/subject_watermark.gif" class="subjectEditor_img_subjWatermark">
</td>
</tr>
<tr  height="100%">
<td height="75%" colspan="2" style="border: 1px solid #cccccc;" ondblclick="AddSubjectWeb(true);"
onclick="AddSubjectIPAD(true);" onkeypress="handleEnter(new Sys.UI.DomEvent(event));">
<cnt:apptree id="crmTree" runat="server" />
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
