<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.WebToLead.WebToLeadPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>

<style>

body
{
margin:	0px;
border: 0px;
background-color: #d6e8ff;
cursor: default;
font-family: Tahoma, Verdana, Arial;
font-size: 11px;
scrollbar-3dlight-color:#6699CC;
scrollbar-arrow-color:#567DB1;
scrollbar-base-color:#D6E8FF;
scrollbar-darkshadow-color:#6699CC;
scrollbar-face-color:white;
scrollbar-highlight-color:#D6E8FF;
scrollbar-shadow-color:#D6E8FF;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
dir:rtl;
<%} %>
}

td
{
font-family: Tahoma, Verdana, Arial;
font-size: 11px;
vertical-align: top;
}


</style>
</head>

<body>
</br>
<table cellpadding="0" cellspacing="0" width="100%" height="100%">
<tr>
<td align="middle"><img alt="" src="/_imgs/ico/16_error.gif"></td>
<td><span runat="server" id="FeatureNotAvailableText"></span></td>
</tr>
</table>
</body>
</html>