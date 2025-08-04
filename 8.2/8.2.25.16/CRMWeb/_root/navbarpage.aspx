<%@ Page language="c#" Inherits="Microsoft.Crm.Web.LeftNavBarPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
.ms-crm-FormLeftNav-RelatedRow
{
height:100%;
overflow:auto;
}
</style>
<cnt:AppHeader runat="server" id="crmHeader"/>
</head>

<body class="ms-crm-Nav">
<cnt:HomePageNavBar id="crmNavBar" runat="server" />
</body>
</html>
