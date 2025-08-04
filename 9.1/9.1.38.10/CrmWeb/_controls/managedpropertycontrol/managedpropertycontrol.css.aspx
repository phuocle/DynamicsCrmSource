<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

div.ms-crm-box
{
width: 100%;
height: 210px;
border-top: 1px solid #898c95;
border-left: 1px solid #898c95;
border-right: 1px solid #898c95;
border-bottom: 1px solid #898c95;
background-color: #eaf3ff;
margin-left: 5px;
margin-right: 5px;
}



table.ms-crm-managedproperties
{
width: 100%;
}

table.ms-crm-childproperties
{

background-color: #ffffff;
width: 100%;
height:100%;
table-layout:fixed;
}

h4.ms-crm-dialog
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
margin-top : 0px;
margin-bottom : 0px;
}

