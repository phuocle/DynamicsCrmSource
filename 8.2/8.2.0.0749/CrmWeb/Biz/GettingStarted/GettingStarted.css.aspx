<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TABLE.ms-crm-GettingStarted-topSection
{
padding: 10px;
background: url(/_imgs/nav_header_back.gif) repeat-x;
}
DIV.ms-crm-GettingStarted-Title
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
padding-bottom: 9px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 6px;
<% }
   else
   { %>
    padding-left: 6px;
<% } %>
}
DIV.ms-crm-GettingStarted-TaskTreeFrame
{
width: 100%;
height: 100%;
border: 1px solid #6693CF;
background: #FFFFFF;
overflow: auto;
}

A SPAN.ms-crm-TaskTreeLeafTitle
{
color: #15428B;
}

DIV.ms-crm-GettingStarted-Description,
DIV.ms-crm-GettingStarted-Description2
{
padding-bottom: 9px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 6px;
<% }
   else
   { %>
    padding-left: 6px;
<% } %>
}