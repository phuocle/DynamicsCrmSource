<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Controls.UnsupportedXmlDom.UnsupportedXmlDomPage" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE HTML>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<title>
<loc:text resourceid="Web._common.error.unsupportedXmlDom.aspx_10" runat="server" />
</title>
<style type="text/css">
.gridContainer
{
background-image: url('/_imgs/error/errorGeneric.gif');
background-repeat: no-repeat;
height: 350px;
padding-top: 10px;
width: 535px;
text-align: center;
margin: 30px auto;
}
.unsupportedXmlDom_td,
.leftAlign_td
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
table.tblerror1
{
position: relative;
z-index: 100;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
right:10px;
<% } else { %>
left:10px;
<% } %>
}
table.tblerror2
{
position: relative;
z-index: 100;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
right:30px;
<% } else { %>
left:30px;
<% } %>
}
</style>
</head>
<body class="ms-crm-ErrorDialog2" scroll="no">
<div style="position: absolute; width: 100%; height: 100%">
<div class="gridContainer">
<table class="tblerror1" width="510px" height="169px" cellspacing="0" cellpadding="3"
border="0">
<col width="65">
<col>
<tr height="20px">
<td style="vertical-align:top;" colspan="2" class="unsupportedXmlDom_td ms-crm-Bold-Header">
<loc:text resourceid="Brand_CRM" runat="server" />
</td>
</tr>
<tr>
<td align="center" style="padding-top: 20px;vertical-align:top;">
<img alt="" src="/_imgs/error/notif_icn_critical.png">
</td>
<td style="padding-top: 12px;vertical-align:top;" class="leftAlign_td">
<div class="ms-crm-Error-Header">
<loc:text resourceid="Web._common.error.unsupportedXmlDom.aspx_48" runat="server" />
</div>
<loc:text resourceid="Web._common.error.unsupportedXmlDom.aspx_50" runat="server" />
<br/>
<br/>
<a href='https://go.microsoft.com/fwlink/?LinkId=95320'>
<loc:text resourceid="Web._common.error.unsupportedXmlDom.aspx_61" runat="server" />
</a>
</td>
</tr>
</table>
<table class="tblerror2" width="480px" cellspacing="0" cellpadding="3" border="0">
<tr>
<td colspan="2" class="unsupportedXmlDom_td ms-crm-Bold-Header">
<loc:text resourceid="Web._common.error.unsupported.aspx_74" runat="server" />
</td>
</tr>
<tr>
<td style="padding-top: 5px;" class="leftAlign_td">
<loc:text resourceid="Web._common.error.unsupportedXmlDom.aspx_70" runat="server" />
<br/>
<br/>
<a href="https://go.microsoft.com/fwlink/?LinkId=37004&clcid=0x409">
<loc:text resourceid="Web._common.error.unsupportedXmlDom.aspx_72" runat="server" />
</a>
<br/>
</td>
</tr>
</table>
</div>
</div>
</body>
</html>
