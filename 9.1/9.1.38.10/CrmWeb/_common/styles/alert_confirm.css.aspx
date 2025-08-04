<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-Confirm-Button
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:8px;
<% } else { %>
margin-left:8px;
<% } %>
max-width:80px;
}

.ms-crm-Cancel-Button
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:8px;
margin-left:30px;
<% } else { %>
margin-left:8px;
margin-right:30px;	<% } %>
max-width:80px;
}

.ms-crm-RefreshDialog-Button.ms-crm-Confirm-Button.ms-crm-RefreshDialog-HighlightButton,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton
{
background-color: rgba(0, 120, 215, 1.0);
color: rgba(255, 255, 255, 1.0) !important;
}

.ms-crm-Confirm-Button:hover,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton:hover
{
background-color: rgba(0, 120, 215, 0.6);
}

.ms-crm-RefreshDialog-Button.ms-crm-Confirm-Button.ms-crm-RefreshDialog-HighlightButton:Disabled,
.ms-crm-RefreshDialog-Button.ms-crm-Cancel-Button.ms-crm-RefreshDialog-HighlightButton:Disabled
{
background-color: rgba(174, 174, 174, 1.0);
color: rgba(255, 255, 255, 1.0) !important;
}