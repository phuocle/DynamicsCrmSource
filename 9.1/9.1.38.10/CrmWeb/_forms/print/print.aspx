<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.WrapperPrintPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>

<!DOCTYPE html>
<html>
<head>
<title><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_Title)%></title>
<cnt:AppHeader id="crmHeader" runat="server" />
</head>
<body>
<div border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
<div id="printHeader" style="display:<%=CanShowMenu %>">
<div height="23">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server" />
</div>
</div>

<div style="position: absolute; width: 100%; top: 54px; bottom: 0px;">
<![if IE 7]>
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]>
<iframe id="printMain" style="right:0px;left:0px" frameborder="0" name="printMain" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(sourceFile.ToString())%> " class="printForm" ></iframe>
<![if IE 7]>
</div>
<![endif]>
</div>
</div>
</body>
</html>
