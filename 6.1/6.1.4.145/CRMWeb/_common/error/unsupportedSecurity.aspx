<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Controls.UnsupportedSecurity.UnsupportedSecurityPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE HTML>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web._common.error.unsupportedSecurity.aspx_10" CheckForLive="true" runat="server"/></title>
</head>
<body class="ms-crm-ErrorDialog" scroll="no">
<table width="100%" cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed" class="ms-crm-Dialog-Error">
<col /><col width="56" /><col width="340" /><col />
<tr>
<td>&nbsp;</td>
<td class="ms-crm-Dialog-Error-Icon" style="vertical-align:top;"><img alt="" src="/_imgs/error/notif_SecurityBadgeWarning32.png" /></td>
<td class="ms-crm-Dialog-Error-Title">
<loc:Text ResourceId="Web._common.error.unsupportedSecurity.aspx_48" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td class="ms-crm-Dialog-Error-Body">
<loc:Text ResourceId="Web._common.error.unsupportedSecurity.aspx_50" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px" class="ms-crm-Dialog-Error-Body">
<loc:Text ResourceId="Web._common.error.unsupportedSecurity.aspx_51" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px" class="ms-crm-Dialog-Error-Body">
<loc:Text ResourceId="Web._common.error.unsupportedSecurity.aspx_61" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
</table>

</body>
</html>
