<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.QueueItemReleaseDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
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
padding-top:1px;
color: #444444;
}
.ms-crm-RefreshDialog-Header-Desc
{
position:relative;
z-index:1;
}
</style>

<script type="text/javascript">


var _sAction = "queueitemrelease";

function applychanges()
{
go();
}

</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
<col width="26"><col>
<tr valign="top">
<td valign="top" colspan="2">
<div class="Desc"><loc:Text ResourceId="Dialog_QueueItemRelease_Label_Single" runat="server"></loc:Text></div>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
