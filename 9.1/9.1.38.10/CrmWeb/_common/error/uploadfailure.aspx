<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Controls.UploadFailure.UploadFailurePage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE HTML>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<title>
<% if(Util.IsLive()) { %>
<loc:Text ResourceId="Web._common.error.uploadfailure.aspx_5" runat="server"/>
<% } else { %>
<loc:Text ResourceId="Web._common.error.uploadfailure.aspx_4" runat="server"/>
<% } %>
</title>

<script type="text/javascript">
var _origWindowWidth;
var _origWindowHeighth;

function PageOnLoad()
{



_origWindowWidth = window.document.body.clientWidth;
_origWindowHeighth = window.document.body.clientHeight;
var w = _origWindowWidth;
var h = _origWindowHeighth;
if(_origWindowWidth < 585) w = 585;
if(_origWindowHeighth < 411) h = 411;
resizeWindow(w, h);


if (typeof(traceMessage) != "undefined")
{

$get('TraceMessage').innerHTML = CrmEncodeDecode.CrmHtmlEncode(traceMessage.replace("\r", "")).replace("&#10;", "<br/>");
}
$addHandler(window, 'unload', PageOnUnLoad);

try {window.opener.auto(_objectType);}catch(e){}
}

$addHandler(window, 'load', PageOnLoad);

function resizeToOriginalAndReturn()
{
resizeWindow(_origWindowWidth + 8, _origWindowHeighth + 47);

<%if(!String.IsNullOrEmpty(redirectUrl)){%>
window.location.href = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(redirectUrl)%>;
<%}else{%>
history.go(-1);
<%}%>
}
function PageOnUnLoad()
{
$removeHandler(window, 'load', PageOnLoad);
}
</script>
</head>

<body class="ms-crm-ErrorDialog">

<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;" class="ms-crm-Dialog-Error">
<col /><col width="56" /><col width="340" /><col />
<tr>
<td>&nbsp;</td>
<td class="ms-crm-Dialog-Error-Icon" style="vertical-align:top;"><img alt="" src="/_imgs/error/notif_icn_critical.png" /></td>
<td class="ms-crm-Dialog-Error-Title">
<loc:Text ResourceId="Web._common.error.uploadfailure.aspx_42" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px" class="ms-crm-Dialog-Error-Body" id="tdMessage" runat="server">
</td>
<td>&nbsp;</td>
</tr>
<tr style="vertical-align:top;">
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px"><div id="TraceMessage" runat="server"></div></td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td style="padding-top: 8px">
<a href="javascript:resizeToOriginalAndReturn()" class="ms-crm-Dialog-Error-Link" id="returnLink"><loc:Text ResourceId="Web._common.error.uploadfailure.aspx_45" runat="server"/></a>
</td>
<td>&nbsp;</td>
</tr>
</table>
<div id="SerializedException" runat="server" style="display:none"></div>
</body>
</html>
