<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Web.CS.UIScriptErrorPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<script language="Javascript">

function applychanges() {
window.returnValue = true;
closeWindow();
}

$addHandler(window, 'load', PageOnLoad);;
function PageOnLoad()
{
self.resizeTo(480, 200);
}
</script>
<div id="importError" style="width:100%;height:100%">
<table height='100%' width='100%' cellspacing="0" cellpadding="0">
<tr>
<td valign='middle' align='center'>
<%= ErrorText %>
</td>
</tr>
</table>
</div>