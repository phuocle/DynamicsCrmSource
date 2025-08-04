<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

IFRAME.noteData
{
height:100%;
width:100%;
}

.crm-note-padding
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2%;
<% } else { %>
padding-left: 2%;
<% } %>
}
.crm-note-floatLeft
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}
.crm-note-floatRight
{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
}