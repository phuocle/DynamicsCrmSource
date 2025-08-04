<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.excelOnlineControl.fillContainer
{
width: 100%;
height: 100%;
}

.excelOnlineControl .fillContainerNoBorder
{

height: calc(100% - 22px);
width: 100%;
border: none;
}

.excelOnlineControl .hidden
{
display: none;
}

.excelOnlineControl .dateTimeParentDivDirection
{
clear: both;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
text-align: left;
<% } else { %>
float: right;
text-align: right;
<% } %>
}

.excelOnlineControl .dateTimeDirection
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
text-align: left;
<% } else { %>
float: right;
text-align: right;
<% } %>
font-family: Segoe UI;
font-size: 12px;
margin-bottom: 6px;
}

.excelOnlineControl .dateTimeTitleDirection
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
text-align: left;
margin-left: 5px;
<% } else { %>
float: right;
text-align: right;
margin-right: 5px;
<% } %>
font-family: Segoe UI;
font-size: 12px;
margin-bottom: 6px;
}