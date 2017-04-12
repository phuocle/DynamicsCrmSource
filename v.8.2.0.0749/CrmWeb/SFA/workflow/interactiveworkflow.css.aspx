<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



TABLE.outerTable
{
border: 2px solid;
border-color: #B6B9BD;
width: 99%;
height: 600px;
text-align: center;
margin-left: 5px;
margin-right: 5px;
}

table.ms-crm-variables-table
{
width:100%;
padding:0px;
margin:0px;
border-collapse:collapse;
}

th.ms-crm-variables-table-cell
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
padding-top: 2px;
padding-bottom: 2px;
margin:0px;
background-color: #A7CDF0;
}

td.ms-crm-variables-table-cell
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
padding-top: 2px;
padding-bottom: 2px;
margin:0px;
overflow:hidden;
text-overflow: ellipsis;
}

td.ms-crm-static-composite-link
{
padding-top:8px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:1px;
<% }
   else
   { %>
    padding-right:1px;
<% } %>
width:15px;
}

A.ms-crm-variables-add:link,
A.ms-crm-variables-add:visited,
A.ms-crm-variables-add:active
{
color: #3366CC;
text-decoration: underline;
}

A.ms-crm-variables-add:hover
{
color: #0000FF;
text-decoration: underline;
}

td.ms-crm-variables-add
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:2px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
padding-top: 6px;
padding-bottom: 8px;
margin:0px;
overflow:hidden;
text-overflow: ellipsis;
}