<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

SPAN.attachment
{
text-decoration:none;
cursor:pointer;
color: #1160B7;
font-family:Segoe UI Semibold;
font-size:<%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
overflow: hidden;
text-overflow:ellipsis;
direction:ltr;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:right;
<% } %>
}
SPAN.ms-crm-Attachment-SizeSpacer
{
width: 30px;
color: #444444;
font-family:Segoe UI;
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}