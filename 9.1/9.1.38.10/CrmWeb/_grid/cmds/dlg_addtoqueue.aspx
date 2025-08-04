<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AddToQueueDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
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


var _sAction = "addtoqueue";
var _crmQueueLookup	 = null;

Sys.Application.add_load(function () {
_crmQueueLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmQueueLookup');
_crmQueueLookup.add_afterSelect(DisableOkButton);
});

function applychanges() {
var dataValue = _crmQueueLookup.get_dataValue();
if (IsNull(dataValue))
{
alert(LOCID_NOONE_SELECTED);
}
else if (0 != dataValue.length)
{

_custParams = "&queueId=" + CrmEncodeDecode.CrmUrlEncode(dataValue[0].id);
if(typeof(_sSubTypes) != "undefined" && !IsNull(_sSubTypes))
{

_custParams += "&sSubTypes=" + CrmEncodeDecode.CrmUrlEncode(_sSubTypes);
}

go();
}
}

function DisableOkButton()
{
$get("butBegin").disabled = IsNull(_crmQueueLookup.get_dataValue());
}


</script>
</head>

<body scroll="no">

<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
<col width="26"><col>
<tr>
<td>&nbsp;</td>
<td>
<div class="Desc" style="padding-bottom:10px;">
<label for="crmQueueLookup">
<loc:Text ResourceId="Dialog_AddToQueue_LabelDetails" runat="server"/>
</label>
</div>


<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<sdk:LookupControl id="crmQueueLookup" AccessibilityLabelResourceId="Dialog_AddToQueue_LabelDetails" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
