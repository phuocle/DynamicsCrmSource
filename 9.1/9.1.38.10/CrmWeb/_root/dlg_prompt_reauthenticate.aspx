<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AuthenticateDialogPage"%>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE HTML>
<html>
<head>
<style>body {overflow: hidden;}</style>
<base target="_self"/>
<cnt:anonymousheader id="crmHeader" runat="server" />
<iframe id="SignoutPanel" runat="server" style="width: 100%; height: 100%;" />
</body>
</html>
