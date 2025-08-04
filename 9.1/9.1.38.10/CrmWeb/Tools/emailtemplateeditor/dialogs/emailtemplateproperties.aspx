<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Tools.EmailTemplateEditor.EmailTemplateEditorProperties" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<title><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.emailtemplateproperties.aspx_4" runat="server"/></title>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="javascript">
function applychanges()
{
var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/emailtemplateeditor.aspx?templateTypeCode=" + CrmEncodeDecode.CrmUrlEncode($get('templateType').value) + "&isPersonal=<%= Util.GetInt(Request.QueryString["isPersonal"]) %>");


var oArgs = getDialogArguments();



window.setTimeout("closeWindow(true)",5);
if (oArgs && oArgs.openStdWin)
{
oArgs.openStdWin(oUrl, buildWinName(), 800, 500);
}
else
{
openStdWin(oUrl, buildWinName(), 800, 500);
}
}

function cancel()
{
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" role="presentation" cellspacing="5" width="100%" style="table-layout:fixed;">
<col width="150"><col>
<tr>
<td><label for="templateType"><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.emailtemplateproperties.aspx_37" runat="server"/></label></td>
<td>
<ui:Select id="templateType" runat="server"/>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
