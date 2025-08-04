<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionRedirectDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">

$addHandler(window, "load", onload);

function onload() {
$get("btnCross").style.display = "none";
}

function cancel() { }
</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
</table>
</frm:DialogForm>

</body>
</html>