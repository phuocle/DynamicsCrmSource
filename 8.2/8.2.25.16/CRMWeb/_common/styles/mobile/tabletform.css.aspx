<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

<% System.Web.HttpContext.Current.Response.ContentType = "text/css"; %>

html
{
height: 100%;
overflow: hidden;
}

body, button, select, textarea, div, td, input
{
font-size: 13px;
font-family: HelveticaNeue, Helvetica, sans-serif;
}

body.main
{
background-color: #F8F8F8;
height: 100%;
overflow:auto;
-webkit-overflow-scrolling:touch;
}

div.attrName, label.attrName
{
color: #666666;
}

input.edt, select.edt
{
font-family: HelveticaNeue-Medium, HelveticaNeue, Helvetica, sans-serif;
height: 28px;
}

div.header, table.header
{
background-color: #F8F8F8;
}

tr.form-row1
{
background-color: #FFFFFF;
}

td.mobCellValue
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
padding-right: 30px;
<% } else { %>
padding-left: 30px;
padding-right: 10px;
<% } %>


}

.edt
{
margin-bottom:12px;
margin-top:6px;
}

label.edt
{
margin-bottom:0px;
}

table.footer
{
background-color: #F8F8F8;
border-spacing: 0px;
height: 44px;
}

input.button
{
-webkit-appearance: none;
border-radius: 0;
min-width: 130PX;
min-height: 24px;
font-family: HelveticaNeue, Helvetica, sans-serif;
font-size: 13px;
color: #666666;
background-color: #FFFFFF;
border-color: #98A3A6;
margin-top: 0px;
margin-bottom:0px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
margin-right: 0px;
float: right;
<% } else { %>
margin-right: 10px;
margin-left: 0px;
float: left;
<% } %>
}

input.button:focus,
input.button:active
{
color: #FFFFFF;
background-color: #0072C6;
border-color: #0072C6;
}

span.tab-button-container
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}