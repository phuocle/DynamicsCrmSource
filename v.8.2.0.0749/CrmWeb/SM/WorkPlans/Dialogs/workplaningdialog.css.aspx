<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

BUTTON.capacityButton
{
width: 180px;
}
SPAN.link
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
text-decoration: underline;
cursor: pointer;
}
SPAN.nolink
{
color: #777777;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}