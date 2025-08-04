<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AssignDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.Desc
{
padding-top:5px;
color: #444444;
}
</style>

<script type="text/javascript">


var _sAction = "assign";
var _crmOwnerLookup = null;

Sys.Application.add_load(function () {
_crmOwnerLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');
});

function radioClick(eventObj)
{
var notification = $find("Notifications");
var newNotification;
if (eventObj.target.id == "rdoMe")
{
_crmOwnerLookup.set_disabled(true);

if (Number(_iObjType) == Workflow || Number(_iObjType) == SLA || Number(_iObjType) == RoutingRule || Number(_iObjType) == ConvertRule)
{
notification.SetVisible(false);
}
}
else
{
_crmOwnerLookup.set_disabled(false);

_crmOwnerLookup.Focus();

if (Number(_iObjType) == Workflow || Number(_iObjType) == SLA || Number(_iObjType) == RoutingRule || Number(_iObjType) == ConvertRule)
{
newNotification = notification.CreateNotification("NotifyUser", 2, "Server", LOCID_NOTIFY_USER);
var oaNot = new Array(newNotification);
notification.SetNotifications(oaNot, "Server");
notification.SetVisible(true);
}
}
}

function applychanges()
{
if ($get("rdoMe").checked)
{
_custParams += "&ownerId=" + CrmEncodeDecode.CrmUrlEncode(_gCurrentUserId);
_custParams += "&ownerType=8";
go();
}
else {
var dataValue = _crmOwnerLookup.get_dataValue();
if ($get("rdoOther").checked && IsNull(dataValue))
{
alert(LOCID_NOONE_SELECTED);
}
else if (0 != dataValue.length)
{
_custParams = "&ownerId=" + dataValue[0].id;

if ("8" == dataValue[0].type)
{
_custParams += "&ownerType=8";
}
else
{
_custParams += "&ownerType=9";
}

go();
}
}
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
<col width="26"><col>
<tr>
<td colspan="2" valign="top">
<cnt:AppNotifications id="Notifications" runat="server"/>
</td>
</tr>
<tr>
<td valign="top">
<input tabindex="1" class="radio" type="radio" name="type" id="rdoMe" checked onclick="radioClick(new Sys.UI.DomEvent(event))">
</td>
<td valign="top">
<label for="rdoMe" hidefocus="true">
<b><loc:Text ResourceId="Web._grid.cmds.dlg_assign.aspx_104" runat="server"/></b>
<br>
<div class="Desc"><loc:Text ResourceId="Web._grid.cmds.dlg_assign.aspx_106" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(this.EntityDisplayName)%></loc:Argument></loc:Text></div>
</label>
</td>
</tr>
<tr><td colspan="2">&nbsp;</td></tr>
<tr>
<td valign="top">
<input tabindex="1" class="radio" type="radio" name="type" id="rdoOther" onclick="radioClick(new Sys.UI.DomEvent(event))">
</td>
<td valign="top">
<label for="rdoOther" hidefocus="true">
<b><loc:Text id="assignLabel" runat="server"/></b>
</label>
<br>
<div class="Desc" style="padding-bottom:10px;"><label id="OwnerLookupLabel"  for="crmOwnerLookup" runat="server"></label></div>



<table cellpadding="0" cellspacing="0" width="90%">
<tr>
<td>
<sdk:LookupControl tabindex="0" id="crmOwnerLookup" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
