<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.SendInviteDialogPage"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Components.UI"%>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web._grid.cmds.dlg_sendinvite.aspx_title" runat="server"/></title>
<script language="javascript">

function applychanges()
{
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

function cancel()
{
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}

</script>

</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<%if (bError)
{%>
<div>
<table cellpadding="0" cellspacing="0" width="100%" height="100%">
<col width="10px"><col width="100px">
<tr><td colspan="2"><ui:LabelUI ID="ErrorForInvite" runat="server" /></td></tr>
</table>
</div>
<%}else{%>
<table cellpadding="0" cellspacing="0" width="100%" height="100%">
<col width="20px"><col width="10px"><col><col width="10px">
<tr><td colspan="3"><loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_130" runat="server" />
<ui:LabelUI ID="FullName" runat="server" />
<loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_131" runat="server" />
</td>
</tr>
<tr height="10px"><td colspan="3"></td></tr>
<tr><td colspan="3"><loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_145" runat="server" />
</td>
</tr>
<tr height="10px"><td colspan="3"></td></tr>
<tr><td colspan="3"><loc:text resourceid="Web._grid.cmds.dlg_sendinvite.aspx_132" runat="server" />
</td>
</tr>
</table>
<%}%>
</frm:DialogForm>
</body>
</html>

