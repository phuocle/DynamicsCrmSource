<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.resourcespecs.SchedulingPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server">
</cnt:AppHeader>
<style type="text/css">
.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static;
}
</style>
<script type="text/javascript" language="javascript">
function GetDurationValue()
{
return Mscrm.FormControlInputBehavior.GetBehavior("displayduration").get_dataValue();
}
function GetGranularityValue()
{
return Mscrm.FormControlInputBehavior.GetBehavior("displaygranularity").get_dataValue();
}
function GetAnchorOffsetValue()
{
return Mscrm.FormControlInputBehavior.GetBehavior("displayanchoroffset").get_dataValue();
}
</script>
<style>
input
{
width:98%;
}
</style>
</head>
<body>
<table width="100%" height="144px" cellpadding="0" cellspacing="0" >
<col width="25%"><col width="25%"><col width="50%">
<tr>
<td class="ms-crm-ReadField-Normal ms-crm-FieldLabel-LeftAlign"><label class="ms-crm-InlineEditLabelText" for="displayduration"><loc:Text ResourceId="Web.CS.services.schedule.aspx_duration" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:Duration id="displayduration" runat="server" /></td>
<td/>
</tr>
<tr>
<td class="ms-crm-ReadField-Normal ms-crm-FieldLabel-LeftAlign"><label class="ms-crm-InlineEditLabelText" for="displaygranularity"><loc:Text ResourceId="Web.CS.services.schedule.aspx_granularity" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:Duration id="displaygranularity" runat="server" /></td>
<td/>
</tr>
<tr>
<td class="ms-crm-ReadField-Normal ms-crm-FieldLabel-LeftAlign"><label class="ms-crm-InlineEditLabelText" for="displaygranularity"><loc:Text ResourceId="Web.CS.services.schedule.aspx_anchoroffset" runat="server"/></label></td>
<td><ui:DateTimeUI id="displayanchoroffset" runat="server" /></td>
<td/>
</tr>
</table>
</body>
</html>
