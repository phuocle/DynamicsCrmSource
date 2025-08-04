<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-Validation-Progress
{
height: 100%;
width: 100%;
background-color: #ffffff;
top: 0px;
bottom: 0px
}

#warningMessageTable
{
border:1px solid #808080;
padding-bottom : 5px;
padding-top :5px;
}

TD.mscrm-docmgmt-WarningMessage
{
background-color:#FFFFCC;
}

#siteUrlTextTable
{
table-layout:fixed;
}

.alignTextLeadingEdge
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% }else{ %>
text-align:left;
<% } %>
}

.mscrm-text-semiBold
{
font-family:Segoe UI Semibold;
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-overflow:ellipsis;
}

.mscrm-text-regular
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:4px;
<% }else{ %>
padding-right:4px;
<% } %>
font-family:Segoe UI;
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-overflow:ellipsis;
}

.mscrm-validSitesMessage, .mscrm-noSitesMessage, .mscrm-enableS2SMessageDark, .mscrm-text-dark
{
color:#444444;
}

#S2SChangesMessage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:14px;
<% }else{ %>
margin-left:14px;
<% } %>
margin-top:12px;
line-height:22pt;
}

.mscrm-Disclaimer , .mscrm-text-light
{
color: #444444;
}

.mscrm-validationPageHeader
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.21px.font_size") %>;
font-family:Segoe UI Light;
color: #262626
}

.ms-crm-Input
{
color: #000000
}

.mscrm-siteValidation-OverflowDiv
{
overflow-y: auto;
overflow-x: hidden;
width:100%;
height:180px;
}

.mscrm-validateSite-HeaderColumn
{
height: 25px;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #D6D6D6;
border-spacing: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}

.mscrm-sites-TableSites
{
width:100%;
table-layout:fixed;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #D6D6D6;
}

.mscrm-siteTable-RowColumn
{
height: 28px;
vertical-align: middle;
white-space: nowrap;
text-overflow:ellipsis;
}

