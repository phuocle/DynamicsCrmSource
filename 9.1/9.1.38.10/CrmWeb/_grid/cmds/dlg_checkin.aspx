<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.CheckIn" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<title>
<loc:text resourceid="Web._grid.cmds.dlg_checkin.aspx_title" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<script language="javascript">
function applychanges() {
var oReturn = new Object();
var comments = $("#txtComments").val();
var isRetain = $('input[name=rdRetain]:checked').val();
oReturn.entityId = _entityId;
oReturn.entityName = _entityName;
oReturn.documentId = _documentId;
oReturn.locationId = _locationId;
oReturn.isRetain = isRetain;
oReturn.comments = comments;
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow(true);
return;
}

function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

Sys.Application.add_load(function () {
Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
if (Mscrm.InlineDialogUtility.isMobileClient() || window.top.UseTabletExperience) {
document.body.addEventListener("touchmove", function (event) { event.preventDefault(); event.stopPropagation() }, false);
}
});

</script>
<style type="text/css">
.ms-crm-RefreshDialog-Main
{
top: 39.5px;
font-size: 12px;
}
.ms-crm-radioDialog
{
cursor: pointer;
vertical-align: middle;
width: 3%;
}
.ms-crm-radioTextDialog
{
cursor: pointer;
font-family:Segoe UI;
width: 47%;
vertical-align:middle;
}
.ms-crm-dialogComments
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-left: 2px;
padding-right:14px;
<% } else { %>
padding-left: 14px;
padding-right:2px;
<% } %>

padding-top:4px;
padding-bottom:2px;
color: #666666;
font-family: Segoe UI;
font-size:12px;
}

.ms-crm-labelText
{
font-family:Segoe UI Semibold;
font-size:12px;
vertical-align: bottom;
padding-top:10px;
}
.ms-crm-SubText
{
padding-top:12.5px;
padding-bottom:2px;

<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-left: 2px;
padding-right:14px;
<% } else { %>
padding-left: 14px;
padding-right:2px;
<% } %>

}
.ms-crm-radioDialog1
{
cursor: pointer;
vertical-align: middle;
width: 3%;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-right:14px;
<% } else { %>
margin-left:14px;
<% } %>

}

</style>
</head>
<body>
<frm:dialogform id="crmForm" runat="server" style="height: 100%; width: 100%">
<table cellspacing="0" cellpadding="0" width="100%" style="table-layout: fixed">
<col width="100"></col>
<tr>
<td>
&nbsp;
</td>
<td>
&nbsp;
</td>
<td>
&nbsp;
</td>
<td>
&nbsp;
</td>
</tr>
<tr>
<td colspan="4" class="ms-crm-labelText">
<loc:Text ResourceId="Web._grid.cmds.dlg_checkin.aspx_retainText" runat="server" class="ms-crm-labelText"/>
</td>
</tr>
<tr style="height:9.8px"><td></td></tr>
<tr>
<td colspan="4">
<input type="radio" name="rdRetain" checked="true" runat="server" id="rdRetain1"
value="1" class="ms-crm-radioDialog1" />
<label for="rdRetain1" class="ms-crm-radioTextDialog">
<loc:Text ResourceId="Web._grid.cmds.dlg_checkin.aspx_retainYes" runat="server" /></label>
<input type="radio" name="rdRetain" value="0" runat="server" id="rdRetain2" class="ms-crm-radioDialog" />
<label for="rdRetain2" class="ms-crm-radioTextDialog">
<loc:Text ResourceId="Web._grid.cmds.dlg_checkin.aspx_retainNo" runat="server" /></label>
</td>
</tr>
<tr style="height:9.6px"><td></td></tr>
<tr>
<td colspan="4" class="ms-crm-dialogComments">
<loc:Text ResourceId="Web._grid.cmds.dlg_checkin_imgHelpText.AltTag" runat="server" />
</td>
</tr>
<tr style="height:11.5px"><td></td></tr>
<tr>
<td colspan="4"  class="ms-crm-labelText">
<loc:Text ResourceId="Web._grid.cmds.dlg_checkin.aspx_comments" runat="server" />
</td>
</tr>
<tr>
<td colspan="4" class="ms-crm-SubText">
<sdk:TextAreaControl id='txtComments' runat="server" Height="60px" maxlength="2000">
</sdk:TextAreaControl>
</td>
</tr>
<tr style="height:9.4px"><td></td></tr>
<tr>
<td colspan="4" class="ms-crm-dialogComments">
<loc:Text ResourceId="Web._grid.cmds.dlg_checkin_imgCommentsText.AltTag" runat="server" />
</td>
</tr>
</table>
</frm:dialogform>
</body>
</html>
