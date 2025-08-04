<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

html,
body
{
height: 100%;
overflow: hidden;
}

#outer
{
height: 100%;
min-height: 100%;
}

html>body #outer
{
height: auto;
}

div.crmUserInfo
{
<% if (CrmStyles.IsRightToLeft) { %>
align: left;
text-align: left;
<% } else { %>
align: right;
text-align: right;
<% } %>
top: 0;
position: fixed;
vertical-align: top;
height: 50px;
max-width: 220px;
text-overflow: ellipsis;
overflow: hidden;
}

div.crmContentPanel
{
display: block;
position: absolute;
top: 135px;
bottom: 0px;
width: 100%;
}

a.crmContentPanel
{
position: fixed;
}

div.ms-crm-TopBarContainer
{
position: fixed;
left: 0px;
top: 0px;
width: 100%;
}

div.ms-crm-TopBarContainer.newNavBarMode
{
top: 40px;
}

div.ms-crm-TopBarContainerGlobal
{
background-repeat: no-repeat;
}

div.ms-crm-TopBarContainerForm
{
background-repeat : repeat-x;
}

div.crmAppNav
{
<% if (CrmStyles.IsRightToLeft) {%>
border-left-width: 1px;
border-left-style: solid;
<% } else {%>
border-right-width: 1px;
border-right-style: solid;
<% } %>

display: block;
position: fixed;
z-index: 100;
left: 0;
overflow: hidden;
}

div.crmRibbonErrorBody
{
border-bottom-color: #6693cf;
border-top-color: #6693cf;
border-bottom-style: solid;
border-top-style: solid;
border-bottom-width: 1px;
border-top-width: 1px;
}


span.warningHeader
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.22px.font_size") %>;
font-weight: <% = WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #990000
}

span.warningDescription
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size:<%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
}