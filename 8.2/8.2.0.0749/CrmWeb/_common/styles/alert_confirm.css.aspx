<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-Confirm-Button
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:8px;
<% }
   else
   { %>
    margin-left:8px;
<% } %>
max-width:80px;
}

.ms-crm-Cancel-Button
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:8px;
    margin-left:30px;
<% }
   else
   { %>
    margin-left:8px;
    margin-right:30px; <% } %>
max-width:80px;
}