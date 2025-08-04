<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Controls.PopupError.PopupErrorPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE HTML>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript" language="javascript">
$addHandler(window, 'load', PageOnLoad);
function PageOnLoad()
{
openErrorDlg(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["hr"]) %>);
$addHandler(window, 'unload', PageOnUnLoad);
}

function PageOnUnLoad()
{
$removeHandler(window, 'load', PageOnLoad);
}

</script>
</head>

<body>
</body>
</html>
