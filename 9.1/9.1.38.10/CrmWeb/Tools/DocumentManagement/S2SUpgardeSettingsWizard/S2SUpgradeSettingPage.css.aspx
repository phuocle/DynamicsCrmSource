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

.mscrm-text-unSelectedStage
{
font-family:Segoe UI;
font-weight:500 ;
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-overflow:ellipsis;
color: #878787;
}

td
{
font-family:Segoe UI;
font-weight:500;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color:#444444;
}

td.mscrm-text-validatesites
{
font-family:Segoe UI;
font-weight:700 ;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %> ;
color:#666666 ;
}

.mscrm-text-S2Swizard
{
font-family:Segoe UI;
font-weight:400;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color:#444444 ;
}

.mscrm-text-SelectedStage
{
font-family:Segoe UI;
font-weight:700;
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-overflow:ellipsis;
color: #000000;
}

#formcontent
{
padding-left: <%= WebUtility.GetFontResourceForStyle("General.20px.font_size") %>;
padding-right: <%= WebUtility.GetFontResourceForStyle("General.20px.font_size") %>;
}

table.sharepointSites tbody {
height: 60px;
width:580px;
overflow-y: auto;
overflow-x: hidden;
display: block;
}

.ms-crm-S2SHelpLink
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:10px;
<% }else{ %>
margin-left:10px;
<% } %>
font-family: Segoe UI;
font-weight: bold !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
color: #0000FF !important ;
}

.ms-crm-S2SPadding
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:20px;
<% }else{ %>
padding-left:20px;
<% } %>
}

.ms-crm-S2SValid
{
color: #006600 !important;
text-align: center;
}

.ms-crm-S2SInvalid
{
color: #D90000 !important;
text-align: center;
}

.ms-crm-WizardForm-Header-Title
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.21px.font_size") %>;
font-family:Segoe UI !important;
font-weight:400 !important;
color:#262626 !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: <%= WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
<% }else{ %>
padding-left: <%= WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
<% } %>
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
width: 96%;
}

DIV.ms-crm-WizardForm-Main
{
border-bottom-width:none !important;
border-bottom-style:none !important;
background-color:white;
border-bottom:none !important;
top:50px !important;
}

DIV.ms-crm-WizardForm-Header-Help
{
display:none;
}

.ms-crm-WizardForm-Footer
{
width:88%  !important;
padding-right:6% !important;
padding-left:6% !important;
background-color:white;
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
height:130px;
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
font-family:Segoe UI !important;
color: #666666 !important;
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
font-family:Segoe UI !important;
}

.mscrm-underlineOnHover:hover
{
text-decoration:	underline;
}

.mscrm-s2slist
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: <%= WebUtility.GetFontResourceForStyle("General.20px.font_size") %>;
<% }else{ %>
padding-left: <%= WebUtility.GetFontResourceForStyle("General.20px.font_size") %>;
<% } %>
list-style : inherit;
}