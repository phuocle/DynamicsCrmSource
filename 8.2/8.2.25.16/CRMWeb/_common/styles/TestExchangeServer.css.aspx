<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

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
color:#ffffff ;
}

.ms-crm-TestExchangeServerProfile-header{
background-color:#0078D7;
padding:20px;
color:#fff !important
}

.mscrm-text-semiBold-title
{
font-family:Segoe UI Semibold;
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
text-overflow:ellipsis;
color:#444444 ;
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
color:#fff ;
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
}

.ms-crm-TestExchangeServerProfile-bodytable
{
table-layout: fixed;
width:100%
}
.ms-crm-TestExchangeServerProfile-InvalidSitesMessage
{
margin-top:20px;
width:100%
}
.ms-crm-TestExchangeServerProfile-textarea
{
width: 99%!important;
}

.ms-crm-TestExchangeServerProfile-marginbottom
{
margin-bottom:7px
}

.ms-crm-TestExchangeServerProfile-Footer
{
padding-top:20px;
width:100%
}


.mscrm-validateSite-TableFooter
{
padding-bottom:20px;
padding-top:10px;
width:100%
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

.mscrm-validateSites-TableSites
{
width:100%;
table-layout:fixed;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #D6D6D6;
padding-top:10px;
}

.mscrm-siteTable-RowColumn
{
height: 28px;
vertical-align: middle;
white-space: nowrap;
text-overflow:ellipsis;
font-family:Segoe UI !important;
}

.mscrm-siteTable-RowColumn-Validate
{
text-align: center;
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

TABLE.mscrm-docmgmt-TableGeneric
{
table-layout:fixed;
width:100%
}

Table.mscrm-docmgmt-TableGeneric TD
{
overflow: hidden;
text-overflow: ellipsis;
}

.ms-crm-TestExchangeServerProfile-title
{
font-family: Segoe UI Light;
font-weight: lighter;
font-size: 36px;
color: #fff !important;
width: 90%;
padding-bottom: 22px;
}

.ms-crm-TestExchangeServerProfile-text
{
font-family: Segoe UI,Tahoma,Arial;
font-size: 12px;
color: #000000;
}

.ms-crm-RefreshDialog-Button
{
height: 24px;
font-family: Segoe UI,Tahoma,Arial;
border: 1px solid #C6C6C6;
background-image: none;
margin-top: 10px;
width: auto !important;
min-width: 80px;
white-space: nowrap;
color: #444444;
background-color: #FFFFFF;
line-height: 16px;
text-align: center;
cursor: pointer;
border-width: 1px;
border-style: solid;
background-repeat: repeat-x;
padding-left: 5px;
padding-right: 5px;
padding:4px 6px;
}

span.ms-crm-RefreshDialog-Button:hover
{
background-color: #d7ebf9;
}

.ms-crm-TestExchangeServerProfile-bodyDiv
{
padding : 20px;
max-height:400px;
overflow: auto;
}

.ms-crm-gridUrl
{
overflow: hidden;
text-overflow: ellipsis;
}

.ms-crm-ExchangeHelpLink
{
font-family: Segoe UI;
font-weight: bold !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #3B3BF5 !important ;
cursor: pointer;
padding-top:5px;
}

.ms-crm-ExchangeHelpLink:hover
{
text-decoration:	underline;
}

.ms-crm-ExchangeTestSuccess
{
color: #fff !important;
}

.ms-crm-ExchangeTestFailure
{
color:  #fff !important;
}

.ms-crm-ExchangeTestWarning
{
color: #FFA500 !important;
}
.ms-crm-ExchangeTestGlobeIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
padding-left: 10px;
<% }else{ %>
float: right;
padding-right: 10px;
<% } %>

padding-top: 10px;

}

.ms-crm-TestExchangeServerProfile-img-info
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-left: 5px;
<% }else{ %>
float: left;
padding-right: 5px;
<% } %>
padding-top: 5px;
}

.ms-crm-TestExchangeServerProfile-img-expand
{
background:  url(<%=CrmUri.Create("/_imgs/Expand_16.png").ToString()%>) no-repeat;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-left: 5px;
<% }else{ %>
float: left;
padding-right: 5px;
<% } %>
}

.ms-crm-TestExchangeServerProfile-img-expand-hover
{
background:  url(<%=CrmUri.Create("/_imgs/Expand_hover_16.png").ToString()%>) no-repeat;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-left: 5px;
<% }else{ %>
float: left;
padding-right: 5px;
<% } %>
}

.ms-crm-TestExchangeServerProfile-img-collapse
{
background:  url(<%=CrmUri.Create("/_imgs/Collapse_16.png").ToString()%>) no-repeat;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-left: 5px;
<% }else{ %>
float: left;
padding-right: 5px;
<% } %>
}

.ms-crm-TestExchangeServerProfile-img-collapse-hover
{
background:  url(<%=CrmUri.Create("/_imgs/Collapse_hover_16.png").ToString()%>) no-repeat;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-left: 5px;
<% }else{ %>
float: left;
padding-right: 5px;
<% } %>
}

.ms-crm-TestExchangeServerProfile-close-buttonTd
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% }else{ %>
float:right;
<% } %>
}