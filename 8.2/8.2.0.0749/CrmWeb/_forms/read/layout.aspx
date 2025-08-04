<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.ReadLayoutPage"
CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
</head>
<body>
<cnt:lookupmru runat="server" id="crmLookupMru"></cnt:lookupmru>
<div id="SubGridCommandBarData"/>
<frm:readform id="crmForm" runat="server"/>
</body>
</html>