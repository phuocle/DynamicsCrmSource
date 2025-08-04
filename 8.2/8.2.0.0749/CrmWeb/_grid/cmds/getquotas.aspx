<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Dialogs.RetrieveQuotaPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<html>
<head>
    <title></title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<cnt:AppQuotaGrid id="grdQuota" ShowHeader="true" runat="server"/>
</body>
</html>