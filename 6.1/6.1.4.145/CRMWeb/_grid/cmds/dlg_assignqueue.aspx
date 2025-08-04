<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AssignQueuePage" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
<head>
<title><loc:Text ResourceId="Web._grid.cmds.dlg_assignqueue.aspx_13" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">
div.Desc
{
padding-top:5px;
padding-bottom:10px;
color: #444444;
}
</style>

<script type="text/javascript">

var crmOwnerLookupControl = null;

Sys.Application.add_load(function()
{
if (!IsNull($get('crmOwnerLookup')))
{
crmOwnerLookupControl = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');
crmOwnerLookupControl.add_afterSelect(updateUIState);
}
updateUIState();
});


<% RenderJScript(); %>

function applychanges()
{

if (_iQueueTypePublic == _iQType)
{

if (_bAssignTomeRadioBtns && $get("rdoTome").checked)
{
if (_bFromForm)
{
var oReturn = new Object();
oReturn.OwnerId = USER_GUID;
oReturn.OwnerType = SystemUser;
oReturn.OwnerName = _sCurrentUserName;
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
return;
}
else
{

_custParams += "&ownerId=Me&routeCode=RTC_USER";
_custParams += "&ownerType=8";
_custParams += "&sSubTypes=" + CrmEncodeDecode.CrmUrlEncode(_sSubTypes);
go();
}
}
else {
var dataValue = crmOwnerLookupControl.get_dataValue();
if (IsNull(dataValue))
{
alert(LOCID_NOONE_SELECTED);
}
else
{
var lookupItem = dataValue[0];
_custParams += "&ownerId=" + CrmEncodeDecode.CrmUrlEncode(lookupItem.id);

if (SystemUser == lookupItem.type)
{
if (_bFromForm)
{
var oReturn = new Object();
oReturn.OwnerId = lookupItem.id;
oReturn.OwnerType = lookupItem.type;
oReturn.OwnerName = lookupItem.name;
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
return;
}
else
{
_custParams += "&routeCode=RTC_USER";
_custParams += "&ownerType=" + CrmEncodeDecode.CrmUrlEncode(SystemUser);
}
}
else if (Team == lookupItem.type)
{
if (_bFromForm)
{
var oReturn = new Object();
oReturn.OwnerId = lookupItem.id;
oReturn.OwnerType = lookupItem.type;
oReturn.OwnerName = lookupItem.name;
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
return;
}
else
{
_custParams += "&ownerType=" + CrmEncodeDecode.CrmUrlEncode(Team);
}
}
else
{
_custParams += "&routeCode=RTC_QUEUE";
_custParams += "&ownerType=2020";
}


_custParams += "&sSubTypes=" + CrmEncodeDecode.CrmUrlEncode(_sSubTypes);


<%
if (sourceQueueId != null)
{
%>
_custParams += "&srcQueueId=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(sourceQueueId))%>";
<%
}
%>


go();
}
}
}
else
{

_custParams += "&ownerId=WIP";
_custParams += "&routeCode=RTC_QUEUE";
_custParams += "&ownerType=2020";
_custParams += "&sSubTypes=" + _sSubTypes;


<% if (sourceQueueId != null){ %>
_custParams += "&srcQueueId=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(sourceQueueId))%>";
<%}%>

go();
}
}

function updateUIState()
{
if (_bAssignTomeRadioBtns)
{

if (!IsNull(crmOwnerLookupControl))
{
crmOwnerLookupControl.set_disabled($get("rdoTome").checked);
if($get("rdoAssign").checked)
{
crmOwnerLookupControl.Focus();
}
}
}



$get("butBegin").disabled = (!IsNull(crmOwnerLookupControl) && !crmOwnerLookupControl.get_disabled()) && IsNull(crmOwnerLookupControl.get_dataValue());
}
</script>
</head>

<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="auto" cellspacing="0" cellpadding="0" >
<col width="26"><col>
<tr>
<%
if (bUseAssignToMeRadioButtons)
{
if (String.Empty != _headerText0)
{
%>
<td valign="top">
<input class="radio" type="radio" name="type" id="rdoTome" onclick="updateUIState()" checked TabIndex="0">
</td>

<td valign="top" style="width:100%;">
<label for="rdoTome" hidefocus="true">
<b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_headerText0)%></b>
<br>
<div class="Desc"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_descriptionText0)%></div>
</label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
</td>
</tr>
<tr>
<td valign="top">
<input class="radio" type="radio" name="type" id="rdoAssign" onclick="updateUIState()" TabIndex="1">
</td>
<%
}
else
{
%>
<td valign="top">&nbsp;</td>
<%
}
}
%>
<td valign="top" style="width:100%;">
<label for="rdoAssign" hidefocus="true">
<b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_headerText1)%></b>
<br>
<div class="Desc"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_descriptionText1)%></div>
</label>
<% if (bLookup){ %>

<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
<tr>
<td>
<sdk:LookupControl id="crmOwnerLookup" Lookupbrowse="false" LookupStyle="single" runat="server" />
</td>
</tr>
</table>
<%  } %>

</td>
</tr>
<tr><td colspan="2" height="100%">&nbsp;</td></tr>
</table>
</frm:DialogForm>
</body>
</html>
