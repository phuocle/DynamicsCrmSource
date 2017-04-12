<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.gridDockContent
{
background-color: #FFFFFF;
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right: 1px solid #DCD9C8;
<% }
   else
   { %>
    border-left: 1px solid #DCD9C8;
<% } %>
border-top: 1px solid #DCD9C8;
padding: 4px;
height: 100%;
width: 100%;
}