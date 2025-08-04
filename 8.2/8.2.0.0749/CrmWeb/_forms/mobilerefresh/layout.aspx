<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.MobileRefreshLayoutPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
</head>
<body>
<frm:MobileRefreshForm id="crmForm" runat="server"/>
</body>
</html>