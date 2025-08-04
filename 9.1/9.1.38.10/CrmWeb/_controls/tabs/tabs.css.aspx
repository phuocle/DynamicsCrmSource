<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.tabsControl
{
display: block;
height: 100%;
min-width: 310px;
margin: 0;
padding: 0px 0px 0px 0px;
}

.tabsControl table
{
height: 0;
border: 0;
margin: 0;
padding: 0;
}

.tabsControl .tabsHeader
{
width: 100%;
height: 40px;
overflow: hidden;
display: table;
table-layout: fixed;
}

.tabsControl .tabsHeader .tabLink:last-of-type {
border-right: none;
}

.tabsControl .tabsHeader .tabLink
{
font-family: "Segoe UI",Arial,Sans-Serif;
font-size: 14px;
font-weight: normal;
color: #505050;
display: inline-block;
max-width: 90px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
cursor: pointer;
word-wrap: normal;
border-top: 2px solid #f8f8f8;
text-align: center;
line-height: 40px;
height: 40px;
border-right: 1px solid #cccccc;
text-decoration: none;
outline: none;
box-sizing: border-box;
<% if (!this.IsVisualRefreshEnabled) { %>
background-color:#f5f5f5;
<% } %>
display: table-cell;
}

.tabsControl .tabsHeader a.tabLink:hover
{
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_SemiBold") %>;
text-decoration: none;
color: #5C5C5C;
}

.tabsControl .tabsHeader .tabLink:focus {
background-color: #f1f1f1;
border: 1px solid #BDC3C7;
outline:none;
}
.tabsControl .tabsHeader .tabLink.active
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight: 600;
border-top: 2px solid #0078D7;
background-color: #ffffff;
}

.tabsControl .tabsContent
{
overflow: hidden;
position: relative;
}

.tabsControl .tabsContent .tabContainer:hover
{
overflow-y: auto;
}

.tabsControl .tabsContent .tabContainer[tabid="ActivityFeedsTab"]:hover,
.tabsControl .tabsContent .tabContainer[tabid="ArticlesTab"]:hover
{
overflow-y: hidden !important;
}

.tabsControl .tabsContent .tabContainer
{
height: 100%;
display:none;
}

div[tabid="ActivitiesTab"],
div[tabid="NotesTab"]
{
height: 97% !important;
overflow : hidden;
}

.tabsControl .tabsContent .tabContainer.active
{
display:block;
}


.tabsControl .tabsContent .tabContainer.YammerIEFix
{
height: 100%;
width: 100%;
position: absolute;
visibility: hidden !important;
display: block !important;
}

.tabsControl .tabsContent .active.YammerIEFix.tabContainer
{
visibility: visible !important;
}

.mobile .tabsControl .tabsContent
{
overflow-y: auto !important;
}

.tabsControl.highContrast .tabsHeader a.tabLink
{
border-color: #ff0000;
border-style: dashed;
border-width: 1px;
}

.tabsControl.highContrast .tabsHeader .tabLink.active
{
border-color: #ff0000;
border-style: solid;
border-width: 1px;
}

.tabsHeader .getYammerHolder
{
margin-top: -2px;
<% if (!CrmStyles.IsRightToLeft)
{ %>
float: right;
padding-right: 8px;
<% }
else
{ %>
float: left;
padding-left: 8px;
<% } %>
}