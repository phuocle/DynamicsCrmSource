<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

col.w
{
background-color: #ffffff;
text-align: center;
cursor: pointer;
}

col.margin,
td.margin
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-left-style:solid;
    border-left-color:#3B3B3B;
<% }
   else
   { %>
    border-right-style:solid;
    border-right-color:#3B3B3B;
<% } %>
border-width: 1px;
}

col.b
{
background-color: #eaeaff;
text-align: center;
cursor: pointer;
}

td.c
{
border-bottom: 1px solid #dddddd;
}

img.c
{
visibility: hidden;
}

tr.h
{
background-color: #f0f0f0;
text-align: center;
cursor: pointer;
height: 20px;
}

td.h
{
background-color:#c2c2c2;
text-align: center;
cursor: pointer;
}

td.am
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding-right: 2px;
<% }
   else
   { %>
    text-align: left;
    padding-left: 2px;
<% } %>
text-indent: 5px;
color:#3B3B3B;
font-family: Segoe UI;
font-size: 11px;
background-repeat: no-repeat;
<% if (CrmStyles.IsRightToLeft)
   { %>
    background-position: top right;
<% } %>
}

td.pm
{
color: #ffffff;
text-align: left;
font-color:#3B3B3B;
font-size: 11px;
font-family: Segoe UI;
background-repeat: no-repeat;
background-position: right;
}

table.contractCal
{
border-right: 1px solid #dddddd;
height: 235px;
width: 100%;
table-layout: fixed;
}

input.chkCal
{
border: 0px;
cursor: pointer;
}

col.d,tr.d,input.d,label.d
{
cursor: default;
}