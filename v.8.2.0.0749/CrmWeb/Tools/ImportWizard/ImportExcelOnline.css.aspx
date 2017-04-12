<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-importExcelOnline-OwnerDiv
{
visibility: hidden;
height: 0px;
width: 0px;
}

.ms-crm-importExcelOnline
{
padding-left: 30px;
padding-right: 30px;
padding-top: 26px;
height: 175px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

.ms-crm-importExcelOnline-PageTitle
{
font-family: Segoe UI Light;
font-size: 21px;
color: #262626;
}

.ms-crm-importExcelOnline-SubtitleTextdiv
{
padding-top: 26px;
align-items: baseline;
}

.ms-crm-importExcelOnline-SubtitleText
{
font-family: Segoe UI Semibold;
font-size: 12px;
color: #444444;
}

.ms-crm-importExcelOnline-FinishMessageDiv
{
padding-top: 12px;
align-items: baseline;
}

.ms-crm-importExcelOnline-FinishMessageText
{
font-family: Segoe UI;
font-size: 12px;
color: #444444;
line-height: 12pt;
}

a.ms-crm-importExcelOnline-ImportLink
{
font-family: Segoe UI;
font-size: 12px;
color: #115FB7;
}

.ms-crm-importExcelOnline-CloseButtonDiv
{
position: absolute;
bottom: 0px;
width: 100%;
background-color: #F8F8F8;
border-top-color: #ffffff;
height: 44px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
<% }
   else
   { %>
    text-align: right;
<% } %>
}

.ms-crm-importExcelOnline-CloseButton
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 30px;
<% }
   else
   { %>
    margin-right: 30px;
<% } %>
}

.ms-crm-importExcelOnline-ErrorImage
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 5px;
<% }
   else
   { %>
    padding-right: 5px;
<% } %>
margin-bottom: -2px;
}