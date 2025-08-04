<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>


.ms-crm-RelevanceSearchProgressBar
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 5px;
<% } else { %>
left: 5px;
<% } %>
position:absolute;
bottom: 0px;
padding-top: 10px;
}

TD.ms-crm-RelevanceSearchProgressBarOK
{
background-color: green;
padding: 1px;
margin-top: 2px
}

TD.ms-crm-RelevanceSearchProgressBarWarn
{
background-color: yellow;
padding: 1px;
margin-top: 2px
}

TD.ms-crm-RelevanceSearchProgressBarError
{
background-color: red;
padding: 1px;
margin-top: 2px
}

.ms-crm-ProgressBarTitle
{
font-size:12px;
}

.ms-crm-ProgressBar
{
margin-top:3px;
margin-left:5px;
margin-right:5px;
}

.ms-crm-ProgressBarStatusText
{
font-size:11px;
padding-top: 1px;
}