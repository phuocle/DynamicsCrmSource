<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

<% System.Web.HttpContext.Current.Response.ContentType = "text/css"; %>

table.paging
{
height: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

tr.row0,
tr.row1
{
width: 100%;
min-height: 28px;
height: auto !important;
height: 28px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}


th.rowHdr
{
background-color: #EEEEEE;
border-bottom: #5C5C5C 1px solid;
height: auto;
color: #3B3B3B;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
}

td.gridCell
{
padding-left: 4px;
padding-right: 4px;
padding-top: 6px;
padding-bottom: 0px;
overflow: hidden;
word-wrap: break-word;
vertical-align: top;
border-width: 0;
}

div.mobileNavigationContainer
{
position: absolute;
bottom: 0px;
left: 0px;
padding-top: 4px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
display: block;
overflow: hidden;
white-space: nowrap;
background-color: #FFFFFF;
}

.androidStatic div.mobileNavigationContainer
{
position: static;
}

div.mobileNavigationContainer.hideContainer
{
display: none;
}

#MobileCommandBar.hideCommandBar
{
display: none;
}

div.mobileNavigationContainer > .mobileNavigationButton
{
background-color: #e0e0e0;
width: 196px;
height: 30px;
border: none;
}

td.gridCell a.gridCell:empty:after
{
content: "--";
}

td.gridCell a.gridCell
{
font-size: 26px;
width:100%;
display:block;
text-decoration:none;
color: #000000;
cursor: pointer;
}

a.gridCell.lastColumn
{
font-size: 14px;
color: #666666;
}


td.gridCell.lastColumn
{
font-size: 22px;
color: #666666;
}

tbody tr td.gridCell a.gridCell:active
{
color: #ee9805;
}

a.gridCellNotClickable
{
width:100%;
display:block;
text-decoration:none;
color: #000000;
}

input.searchControl
{
width: 100%;
}

div.viewName
{
padding-left: 4px;
padding-right: 4px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}

.ms-crm-List-Data
{
table-layout: fixed;
width: 100%;
}

input
{
background-color: #ffffff;
border: 1px solid #999999;
}

div.controlsRow,
tr.controlsRow
{
height: auto;
}

div.searchRowHidden
{
display: none;
}

.mobCellControl
{
width: 65%;
}

.mobCellButton
{
width: 35%;
}

.newRecordButton
{
padding : 4px;
}

.pageButtonContainer
{
height: 29px;
margin: 11px 0;
margin-top: 22px;
text-align: center;
}

.pageButtonContainer input
{
height: 29px;
width: 29px;
min-width: 29px;
padding: 0;
margin: 0;
float: none;
}

.pageButtonContainer .pageNumber
{
display: inline-block;
margin: 0 8px;
height: 29px;
line-height: 29px;
font-size: 13px;
vertical-align: middle;
}

.pageNumber
{
color: #666666;
}

.controlsHeader
{
width: 100%;
table-layout: fixed;
background-color: #F6F8FA;
}