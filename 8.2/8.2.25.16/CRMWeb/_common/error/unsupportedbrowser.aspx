<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Controls.UnsupportedBrowser.UnsupportedBrowserPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
.textStyle
{
font-family: Segoe UI, Tahoma, Arial;
font-size: 16px;
font-weight: normal;
margin: 0px auto;
position: relative;
color: #333333;
width: 494px;
height: 165px;
}
.colorStyle
{
background-color: #E9EDF1;
}
.topDiv
{
position: relative;
height: 100px;
width: 100%;
}
.outerDiv
{
width: 100%;
}
.innerText2
{
position: relative;
top: 40px;
left: 150px;
width: 340px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
direction: rtl;
left: 100px;
<%} %>
}
</style>
</head>

<body class="colorStyle">
<div id="topDiv" class="topDiv"></div>
<div id="outerDiv" class="outerDiv">
<div class="textStyle">
<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td width="494" height="165" background="/_imgs/error/messagelogo.png" valign="top">
<div class="innerText2">
<loc:Text ResourceId="Web._common.error.unsupported.aspx_BrowserPage" runat="server"/>
</div>
</td>
</tr>
</table>
</div>
</div>
</body>
</html>
