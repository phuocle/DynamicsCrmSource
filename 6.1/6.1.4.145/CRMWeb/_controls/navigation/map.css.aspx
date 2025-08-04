<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

body
{
background-color: #ffffff;
}

div.ms-crm-Setting-Context
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 0;
left:4px;
<% } else { %>
right:4px;
left:0px;
<% } %>
top:4px;
bottom:4px;
position:absolute;
}

td
{
vertical-align: top;
}

.navigationsubtitle
{
padding-top: 15px;
border-bottom:1px Solid;
}

.navigationsectionsubtitle
{
padding-top: 15px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
border-bottom:1px Solid;
}

.content
{
overflow-y: auto;
height: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 13px;
padding-left: 15px;
<% } else { %>
padding-left: 13px;
padding-right: 15px;
<% } %>
}

.nav
{
background-color: #8E9CBB;
border-top: #6699CC 1px solid;
color: #FFFFFF;
height: 23px;
}

A.linktitle,
A.linktitle:link,
A.linktitle:visited,
A.linktitle:active,
A.linktitle:hover
{
padding-bottom: 2px;
}

A.linktitlesm,
A.linktitlesm:link,
A.linktitlesm:visited,
A.linktitlesm:active,
A.linktitlesm:hover
{
padding-bottom: 2px;
border-bottom: solid 1px #cccccc;
}

div.linkhelp
{
padding-top: 2px;
}
