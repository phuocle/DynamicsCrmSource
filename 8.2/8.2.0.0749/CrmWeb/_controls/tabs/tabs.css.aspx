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
height: 100%;
border: 0;
margin: 0;
padding: 0;
}

.tabsControl .tabsHeader
{
width: 100%;
height: 15px;
overflow: hidden;
}

.tabsControl .tabsHeader .tabLink
{
height: 15px;
font-family: "Segoe UI",Arial,Sans-Serif;
font-size: 12px;
font-weight: bold;
color: #666666;
display: inline-block;
max-width: 95px;
overflow:hidden;
text-overflow:ellipsis;
white-space: nowrap;
margin: 0 14px 0 0;
cursor: pointer;
word-wrap: normal
}

.tabsControl .tabsHeader a.tabLink:hover
{
text-decoration: none;
color: #333333;
}

.tabsControl .tabsHeader .tabLink.active
{
color: #000000;
}

.tabsControl .tabsContent
{
overflow: hidden;
position: relative;
}

.tabsControl .tabsContent:hover
{
overflow-y: auto;
}

.tabsControl .tabsContent .tabContainer
{
height: 100%;
display:none;
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