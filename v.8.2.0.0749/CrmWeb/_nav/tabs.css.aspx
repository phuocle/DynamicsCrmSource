<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

div.ms-crm-TabBar-Cell,
td.ms-crm-TabBar-Cell
{
background-position: bottom;
background-image: url(/_imgs/tab_line.gif);
background-repeat: repeat-x;
}

li.ms-crm-Tab
{
border-width: 1px;
border-style: solid;
height: 18px;
padding-left: 10px;
padding-right: 10px;
padding-top: 0px;
line-height:18px;
background-repeat: repeat-x;
cursor: pointer;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    position: relative;
    float: left;
<% } %>
}

li.ms-crm-Tab-Selected
{
border-bottom-width: 1px;
cursor: default;
height: 19px;
}

div.ms-crm-TabContainer
{
position:absolute;
}

div.ms-crm-Tab
{
height: 100%;
}
div.ms-crm-Tab,
div.ms-crm-TabS
{
border-bottom-style: solid;
border-bottom-width: 1px;
border-right-style: solid;
border-right-width: 1px;
border-left-style: solid;
border-left-width: 1px;
display: none;
}
div.ms-crm-TabS
{
top:30px;
position:absolute;
bottom:0px;
width:98%;
}
div.ms-crm-InlineTab
{
display: block;
}

table.ms-crm-InlineTabHeader
{
margin-bottom: 3px;
padding-bottom: 2px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 3px;
    padding-right: 4px;
<% }
   else
   { %>
    padding-left: 4px;
    padding-right: 3px;
<% } %>
padding-top: 3px;
width: 100%;
}

.ms-crm-InlineTabBody
{
width: 100%;
table-layout: fixed;
}

td.ms-crm-InlineTabHeaderExpander
{
vertical-align: middle;
}

td.ms-crm-InlineTabHeaderText
{
vertical-align: middle;
width: 100%;
}

DIV.ms-crm-Form-Area
{

height: 100%;
}

DIV.ms-crm-Form-Area-Print
{
overflow-x: visible;
width: 100%;
height: 100%;
}

ul.ms-crm-TabBar
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right-width: 1px;
    border-right-style: solid;
<% }
   else
   { %>
    border-left-width: 1px;
    border-left-style: solid;
<% } %>
width: 100%;
height: 21px;
overflow: hidden;
margin: 0px;
padding: 0px;
list-style: none;
}

.crm-settings-floatLeft
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% }
   else
   { %>
    float:left;
<% } %>
}
.crm-settings-floatRight
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:left;
<% }
   else
   { %>
    float:right;
<% } %>
}
div.formEditor-TabBar
{
height: 20px;
}
.crm-tab-Extend
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 5px;
<% }
   else
   { %>
    margin-left: 5px;
<% } %>
}