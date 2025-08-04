<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.TemporaryPage"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
</head>
<body>
<div class="ms-crm-Help-ErrorMessage">
	<loc:Text ResourceId="Web.Help.tmp.aspx_07" runat="server"/>
</div>
<br>
<a href="javascript:top.document.getElementById('topBar').showTOC();" class="help_link"><loc:Text ResourceId="Web.Help.tmp.aspx_10" runat="server"/></a>
</body>
</html>
