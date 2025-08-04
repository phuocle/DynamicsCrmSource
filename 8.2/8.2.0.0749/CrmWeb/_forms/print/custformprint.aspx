<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.EntityPrintPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>

    <%
        CurrentHeader.SetStyleSheet("/_forms/styles/print.css.aspx");
    %>


    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<frm:PrintForm id="crmForm" RenderOnlyBody="false" runat="server"/>
</body>
</html>