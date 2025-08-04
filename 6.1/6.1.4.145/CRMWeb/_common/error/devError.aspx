<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.DevErrorPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<html>
<head>
<title><loc:Text ResourceId="Web._common.error.devError.aspx_03" runat="server"/></title>
<script type="text/javascript" src="/_common/global.ashx"></script>
<script type="text/javascript" language="JavaScript">
var _o;

window.onload = function()
{
try
{
document.body.innerHTML = window.opener.document.body.innerHTML;
_o = document.getElementById("imgGeneral");
}
catch (e)
{
alert(<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(AppResourceManager.Default.GetString("Web._common.error.devError.aspx_16"))%>);
}
}




function copyToClipboard()
{
var iframeDubug = XUI.Html.DomUtils.GetFirstChild(document.getElementById("ifrmDebug").contentWindow.document);
var debugInfo = XUI.Html.GetText(iframeDubug);
var generalInfo = XUI.Html.GetText(document.getElementById("tabGeneral"));
var detailInfo = XUI.Html.GetText(document.getElementById("tabDetails"));
var divider = "\r\n\r\n----------------------------------\r\n\r\n";
var clipboard = new XUI.ClipboardManager();
clipboard.SetData(debugInfo + divider + generalInfo + divider + detailInfo);
}

function glow(bImg)
{
var o = bImg;
if(typeof(_o) == 'undefined' || _o == null)
{
_o = document.getElementById("imgGeneral");
}
if (o.src.indexOf("_1") > 0)
{
if (!o.loaded) o.src = o.src.replace(/_1/,"_0");
}
else
{
o.src = o.src.replace(/_0/,"_1");
}
}

function load(bImg)
{
var o = bImg;
if(typeof(_o) == 'undefined' || _o==null)
{
_o = document.getElementById("imgGeneral");
}
o.loaded = true;
_o.loaded = false;

_o.src = _o.src.replace(/_1/,"_0");
o.src = o.src.replace(/_0/,"_1");

document.getElementById(_o.getAttribute('tab')).style.display = "none";
document.getElementById(o.getAttribute('tab')).style.display = "block";

_o = o;
}

</script>

<style type="text/css">

body
{
background-color: #EFEFEB;
margin: 0px;
overflow: hidden;
}

h2
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
color: #aa0000;
}

td,
div
{
font-family: Verdana, Arial;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
vertical-align: top;
}

header
{
border-bottom: solid 1px #999999;
color: #004488;
font-size: <%= WebUtility.GetFontResourceForStyle("General.22px.font_size") %>;
font-family: Arial Black;
}

div.err
{
margin-top: 2px;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #003300;
}

#leftMenu
{
background-color: #809D82;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
border-right: solid 1px #BAD7BC;
border-left: solid 1px #1F5A1E;
<% } else { %>
border-right: solid 1px #1F5A1E;
border-left: solid 1px #BAD7BC;
<% } %>
border-top: solid 1px #BAD7BC;
border-bottom: solid 1px #1F5A1E;
padding-top: 5px;
width:76px;
height:100%;
position:absolute;
}

#spacerBar
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
border-left: solid 1px #969693;
right:78px;
<% } else { %>
border-right: solid 1px #969693;
left:78px;
<% } %>
background-color: #C2C2BF;
width:2px;
height:100%;
position:absolute;
}
#contentDiv
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
right:88px;
left:12px;
<% } else { %>
left:88px;
right:12px;
<% } %>
position:absolute;
top:12px;
bottom:12px;
min-width:500px;
}
#ifmDebug
{
width: 100%;
height: 100%;
}
.ifrmContainerDiv
{
padding-top: 16px;
border: #999999 1px solid;
position: absolute;
top: 48px;
bottom: 0px;
left: 0px;
right: 0px;
overflow: hidden;
}

</style>
</head>

<body>

<loc:Text ResourceId="Web._common.error.devError.aspx_131" runat="server"/>

</body>
</html>
