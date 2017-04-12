<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.ProductPrintPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>

    <%
        CurrentHeader.SetStyleSheet("/_forms/styles/print.css.aspx");
    %>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<frm:PrintForm id="crmForm" runat="server"/>
</body>
</html>