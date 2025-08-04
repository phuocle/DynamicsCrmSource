<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



body, .textBlock
{
font-family: Segoe UI, Tahoma, Arial;
font-size: 12px;
color: #000000;
min-width: 668px;
}

body
{
padding-left: 50px;
padding-top: 50px;
padding-right: 50px;
}

#scrollContainer {
height: 100%;
overflow-y: auto;
}

#disclaimerPart p
{
line-height: 18px;
font-family: Segoe UI, Tahoma, Arial;
font-size: 12px;
margin-top: 28px;
margin-bottom: 0px;
}

.textBlock
{
padding: 0px;
margin: 0px;
position: relative;
}

div.textBlock p
{
margin: 0px;
padding: 0px;
position: relative;
bottom: 0px;
}

div.disclaimerTitle
{
height: 68px;
vertical-align: bottom;
}

div.disclaimerTitle span
{
<% if (CrmStyles.IsRightToLeft) { %>
background-position: left top;
<% } else { %>
background-position: right top;
<% } %>
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 36px;
font-weight: lighter;
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 0px 0px 70px;
<% } else { %>
padding: 0px 70px 0px 0px;
<% } %>
position: relative;
bottom: 0px;
min-width: 0px;
}

div.configTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% } else { %>
padding-left: 0px;
<% } %>
padding-top: 0px;
padding-bottom: 2px;
height: 36px;
<% if (CrmStyles.IsRightToLeft) { %>
background-position: right bottom;
<% } else { %>
background-position: left bottom;
<% } %>
}

div.configTitle p
{
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 36px;
font-weight: lighter;
position: relative;
left: 0px;
top: 0px;
}

.buttonsDiv
{
padding-top: 34px;
}

a, a:hover, a:visited, a:link, a:active
{
color: #115fb7;
}

a.disabled {
color: #5b626c;
cursor: default;
}

button
{
margin-right: 8px;
width:auto;
}

.basic-button
{
min-width: 80px;
width: auto;
height: 24px;
padding-left: 16px;
padding-right: 16px;
margin-left: 0px;
margin-right: 10px;
border: 1px solid #666666;
background: white;
font-size: 12px;
color: #262626;
}