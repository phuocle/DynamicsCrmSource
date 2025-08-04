<!DOCTYPE HTML>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.HelpFind" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
</head>
<body style="padding:10px; background-color:#ffffff;">

<div class="section" style="margin-bottom:5px;">
<loc:Text ResourceId="Web.Help.find.aspx_8" runat="server"/>
</div>

<table width="100%" cellspacing="0" cellpadding="4" style="table-layout:fixed;">
<col class="ms-crm-Bold-Header" width="30"><col>
<%

int iContentCount = 0;
int iTitleCount = 0;

if (!searchError)
{
while (titleSearchReader.Read() && iTitleCount < MaxBestBets)
{


if (titleSearchReader.GetValue(1).ToString().Length > 0)
{



if (iTitleCount == 0)
{
%>
<tr>
<td colspan="2" class="ms-crm-Emphasis-None" style="padding-bottom:8px;">
<loc:Text ResourceId="Web.Help.find.aspx_33" runat="server"><loc:Argument runat="server"> <b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(UserQuery)%></b></loc:Argument></loc:Text>
</td>
</tr>
<%
}

iTitleCount++;
%>
<tr>
<td><%=iTitleCount%>.</td>
<td>
<a class="ms-crm-Link" href="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(HelpFilePrefix))%>/content/<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode((string)titleSearchReader.GetValue(0)))%>" class="helpLink"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode((string)titleSearchReader.GetValue(1))%></a>
</td>
</tr>
<%
}
}
%>

<tr>
<td colspan="2">&nbsp;</td>
</tr>

<%
while (contentSearchReader.Read() && iContentCount < MaxResults)
{


if (contentSearchReader.GetValue(1).ToString().Length > 0)
{



if (iContentCount == 0)
{
%>
<tr>
<td colspan="2" class="ms-crm-Emphasis-None" style="padding-bottom:8px;">
<%if (iTitleCount >0) { %>
<loc:Text ResourceId="Web.Help.find.aspx_34" runat="server"><loc:Argument runat="server"> <b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(UserQuery)%></b></loc:Argument></loc:Text>
<%} else { %>
<loc:Text ResourceId="Web.Help.find.aspx_35" runat="server"><loc:Argument runat="server"> <b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(UserQuery)%></b></loc:Argument></loc:Text><br>
<loc:Text ResourceId="Web.Help.find.aspx_34" runat="server"><loc:Argument runat="server"> <b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(UserQuery)%></b></loc:Argument></loc:Text>

<%} %>
</td>
</tr>
<%
}

iContentCount++;
%>
<tr>
<td><%=iContentCount%>.</td>
<td>
<a class="ms-crm-Link" href="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(HelpFilePrefix))%>/content/<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode((string)contentSearchReader.GetValue(0)))%>" class="helpLink"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode((string)contentSearchReader.GetValue(1))%></a>
</td>
</tr>
<%
}
}
}

if (searchError || iContentCount == 0)
{
%>
<tr>
<td colspan="2" class="ms-crm-Emphasis-None">
<loc:Text ResourceId="Web.Help.find.aspx_57" runat="server"><loc:Argument runat="server"><b><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(UserQuery)%></b></loc:Argument></loc:Text>
<span class="err">
<br>
<br>
<loc:Text ResourceId="Web.Help.find.aspx_70" runat="server"/>
<br>
<br>
<table width="100%" cellspacing="0" cellpadding="0" class="err">
<tr><td><li></td><td style="padding-bottom:5px;"><loc:Text ResourceId="Web.Help.find.aspx_72" runat="server"/></td></tr>
<tr><td><li></td><td style="padding-bottom:5px;"><loc:Text ResourceId="Web.Help.find.aspx_71" runat="server"/></td></tr>
<tr><td><li></td><td style="padding-bottom:5px;"><loc:Text ResourceId="Web.Help.find.aspx_74" runat="server"/></td></tr>
<tr><td><li></td><td style="padding-bottom:5px;"><loc:Text ResourceId="Web.Help.find.aspx_73" runat="server"/></td></tr>
</table>
</span>
</td>
</tr>
<%
}
%>
</table>

</body>
</html>
