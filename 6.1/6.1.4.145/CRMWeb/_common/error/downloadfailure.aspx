<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Controls.DownloadFailurePage"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title>
<% if(Util.IsLive()) { %>
<loc:Text ResourceId="Web._common.error.downloadfailure.aspx_5" runat="server"/>
<% } else { %>
<loc:Text ResourceId="Web._common.error.downloadfailure.aspx_4" runat="server"/>
<% } %>
</title>

<script type="text/javascript" language="Javascript">
Sys.Application.add_load(PageOnLoad);
var _origWindowWidth;
var _origWindowHeighth;

function PageOnLoad()
{



_origWindowWidth = window.document.body.clientWidth;
_origWindowHeighth = window.document.body.clientHeight;
var w = _origWindowWidth;
var h = _origWindowHeighth;
if (_origWindowWidth < 585)
w = 585;
if (_origWindowHeighth < 411)
h = 411;
resizeWindow(w, h);
}

function resizeToOriginalAndReturn()
{
resizeWindow(_origWindowWidth, _origWindowHeighth + 30);
history.go(-1);
}

</script>
</head>

<body class="ms-crm-ErrorDialog">

<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;" class="ms-crm-Dialog-Error">
<col /><col width="56" /><col width="340" /><col />
<tr>
<td>&nbsp;</td>
<td class="ms-crm-Dialog-Error-Icon" style="vertical-align:middle;"><img alt="" src="/_imgs/error/notif_icn_critical.png" /></td>
<td class="ms-crm-Dialog-Error-Title">
<loc:Text ResourceId="Web._common.error.downloadfailure.aspx_42" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px" class="ms-crm-Dialog-Error-Body" id="tdMessage" runat="server">
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px">
<a href="javascript:resizeToOriginalAndReturn()" class="ms-crm-Dialog-Error-Link"><loc:Text ResourceId="Web._common.error.downloadfailure.aspx_45" runat="server"/></a>
</td>
<td>&nbsp;</td>
</tr>
</table>

</body>
</html>
