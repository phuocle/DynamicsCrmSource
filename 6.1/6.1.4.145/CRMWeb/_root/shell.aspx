<!DOCTYPE html>
<%@ Page language="c#" %>
<%@ OutputCache Duration="604800" Location="Client" VaryByParam="lcid" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<%
Response.Cache.SetCacheability(HttpCacheability.Private);
Response.Cache.VaryByParams["*"] = true;
Response.Expires = 24 * 60;
%>

<html xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%">
<head>
<title><loc:Text ResourceId="RichClient_Shell_Title" runat="server"/></title>
<meta http-equiv="Content-Language" content="en-us"/>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
<meta http-equiv="MSThemeCompatible" content="Yes"/>
</head>

<body bgcolor="#F0F1F2" style="height:100%;width:100%;margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; overflow:hidden; border:0">
<object
name="ActiveXShellFrame"
id="ActiveXShellFrame"
classid="clsid:4399562B-40D8-478B-BDA4-7A83F8D7811C"
width="100%" height="100%" >
</object>
</body>
</html>
