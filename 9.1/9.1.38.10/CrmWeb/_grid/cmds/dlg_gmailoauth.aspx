<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.GmailOAuthDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<title>
<loc:text ID="dialogTitle" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<input id="dialogMode" name="runonlytestaccess" type="hidden" runat="server" />
<div id="dialogDescriptionControl" runat="server" />
</frm:DialogForm>
</body>
</html>