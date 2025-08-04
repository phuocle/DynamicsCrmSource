<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.CGSelectorTD
{
width:30%;
position:absolute;
top:0px;
padding-top:10px;
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
<% }else{ %>
left:0px;
<% } %>
bottom:0px;
}

.CGChartPreviewTD
{
width:70%;
text-align:center;
vertical-align: middle;
position:absolute;
top:0px;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
<% }else{ %>
right:0px;
<% } %>
bottom:0px;
}

TABLE.CGSelectorTable
{
top: 24px;
width:90%;
vertical-align:top;
margin-left:10px;
margin-right:10px;
}

TR.CGSelectorTR
{
height:24px;
}

IFRAME.CGChartPreviewFrame
{
border: 2px;
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
width:100%;
height:100%;
}
