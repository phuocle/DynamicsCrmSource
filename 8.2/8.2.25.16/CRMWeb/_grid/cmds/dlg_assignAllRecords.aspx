<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AssignAllRecordsDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.Desc
{
padding-top:5px;
color: #444444;
}
div.ms-crm-RefreshDialog-Main
{
top: 95px !important;
}
div.ms-crm-RefreshDialog-Header
{
height: 85px !important;
}
</style>

<script language="JavaScript">

var _crmOwnerLookup = null;
var _crmBULookup = null;

Sys.Application.add_load(function () {
_crmOwnerLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');
_crmBULookup = Mscrm.FormControlInputBehavior.GetBehavior('crmBULookup');
});

function radioClick(eventObj) {
var notification = $find("Notifications");
var newNotification;
if (eventObj.target.id == "rdoMe")
{
_crmOwnerLookup.set_disabled(true);


newNotification = notification.CreateNotification("NotifyMe", 2, "Server", LOCID_NOTIFY_ME);
}
else
{
_crmOwnerLookup.set_disabled(false);


newNotification = notification.CreateNotification("NotifyUser", 2, "Server", LOCID_NOTIFY_USER);
}

var oaNot = new Array(newNotification);
notification.SetNotifications(oaNot, "Server");
}

function getCustParamsForItem(index) {
var url = Mscrm.CrmUri.create(window.location.toString());
return "&newBUId=" + CrmEncodeDecode.CrmUrlEncode(_crmBULookup.get_dataValue()[0].id) + "&oldBUId=" + CrmEncodeDecode.CrmUrlEncode(url.get_query()["oldBUId"]);
}

function applychanges()
{
var oReturn = new Object();

if (typeof(EntityType) != "undefined" && EntityType == BusinessUnit)
{
if (IsNull(_crmBULookup.get_dataValue()))
{
alert(LOCID_NOBU_SELECTED);
return;
}


_a = [
Mscrm.EntityTypeCode.SystemUser,
Mscrm.EntityTypeCode.Team,
Mscrm.EntityTypeCode.BusinessUnit,
Mscrm.EntityTypeCode.Equipment,
Mscrm.EntityTypeCode.ConstraintBasedGroup,
Mscrm.EntityTypeCode.ResourceSpec
];
_iObjType = BusinessUnit;
_sAction = "assignallrecords";
_bContinueOnError = false;
go();
return;

}
else
{
if ($get("rdoMe").checked)
{
oReturn.OwnerId = USER_GUID;
oReturn.OwnerType = SystemUser;
}
else
{
var dataValue = _crmOwnerLookup.get_dataValue();
if ($get("rdoOther").checked && IsNull(dataValue))
{
alert(LOCID_NOONE_SELECTED);
return;
}

oReturn.OwnerId = dataValue[0].id;
oReturn.OwnerType = dataValue[0].type;
}
}

Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
}

function cancel()
{
closeWindow();
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

<table id="tableUserTeam" runat="server" width="100%" height="100%" cellspacing="0" cellpadding="0">
<col width="26"><col>
<tr>
<td colspan="2" valign="top">
<cnt:AppNotifications id="Notifications" runat="server"/>
</td>
</tr>
<tr>
<td valign="top">
<input class="radio" type="radio" name="type" id="rdoMe" checked onclick="radioClick(new Sys.UI.DomEvent(event))">
</td>
<td valign="top">
<label for="rdoMe" hidefocus="true">
<b><loc:Text ResourceId="Web._grid.cmds.dlg_assignallrecords.aspx_104" runat="server"/></b>
<br>
<div class="Desc"><loc:Text ResourceId="Web._grid.cmds.dlg_assignallrecords.aspx_106" runat="server"/></div>
</label>
</td>
</tr>
<tr><td colspan="2">&nbsp;</td></tr>
<tr>
<td valign="top">
<input class="radio" type="radio" name="type" id="rdoOther" onclick="radioClick(new Sys.UI.DomEvent(event))">
</td>
<td valign="top">
<label for="rdoOther" hidefocus="true">
<b><loc:Text ResourceId="Web._grid.cmds.dlg_assignallrecords.aspx_115" runat="server"/></b>
<br>
<div class="Desc" style="padding-bottom:10px;"><label for="crmOwnerLookup"><loc:Text ResourceId="Web._grid.cmds.dlg_assignallrecords.aspx_117" runat="server"/></label></div>


<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
<tr>
<td>
<sdk:LookupControl id="crmOwnerLookup" AccessibilityLabelResourceId="Web._grid.cmds.dlg_assignallrecords.aspx_117" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
</tr>
</table>
</label>
</td>
</tr>
</table>
<table id="tableBusinessUnit" runat="server">
<tr>
<td>
<loc:Text ResourceId="Dialog_BUReassignRecords_LookupLabel" runat="server"/>
<br />
<sdk:LookupControl id="crmBULookup" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
</tr>
<tr>
<td><loc:Text ResourceId="Dialog_BUReassignRecords_BodyMessage" runat="server"/></td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
