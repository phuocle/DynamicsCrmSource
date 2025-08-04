<%@ Page Inherits="Microsoft.Crm.Web.Tools.SelectValues"   %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<title><loc:Text ResourceId="Web.Tools.ViewEditor.Dialogs.SelectValues.aspx_5" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
</head>
<body>
	<frm:DialogForm id="crmForm" runat="server">
		<table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
			<tr>
				<td>
					<div id="divFieldSelect" width="100%">
				</td>
			</tr>
		</table>
	</frm:DialogForm>
</body>
</html>
