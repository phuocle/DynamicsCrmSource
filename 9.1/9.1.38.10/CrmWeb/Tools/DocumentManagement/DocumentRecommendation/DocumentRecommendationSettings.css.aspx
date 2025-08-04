<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


.mscrm-documentRecommendation-TableEntities
{
width:100%;
table-layout:fixed;
background-color:#FFFFFF;
border-collapse: collapse;
}

.mscrm-documentRecommendation-Footer
{
background-color: #f8f8f8;
height: 40px;
width:100%;
position:absolute;
bottom: 1%;
}

.mscrm-documentRecommendation-entityTableBody
{
top: 40px;
bottom: 0px;
vertical-align: top;
border-bottom-width: 1px;
padding-top: 10px;
left: 0px;
right: 0px;
overflow-y: auto;
overflow-x: hidden;
}

.mscrm-documentRecommendation-PageNotificationImageTd
{
vertical-align: top;
padding-top: 5px;
}

.mscrm-documentRecommendation-PageNotificationTextTd
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 3px;
<% } else { %>
padding-left: 3px;
<% } %>
vertical-align: middle;
}

.mscrm-documentRecommendation-HeaderEntityColumn
{
width: 96%;
height: 25px;
border-color: #BFBFBF;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right: 5px;
<% } else { %>
text-align: left;
padding-left: 5px;
<% } %>
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}

.mscrm-documentRecommendation-FooterTextDiv
{
width: auto;
position: absolute;
margin-top: 11px;
font-size: 12px;
font-family: segoe UI;
color: #444;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 30px;
left: 0px;
<% } else { %>
margin-right: 30px;
right: 0px;
<% } %>
}

.mscrm-documentRecommendation-Footer-Label
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 5px;
<% } else { %>
padding-right: 5px;
<% } %>
}

.mscrm-documentRecommendation-HeaderCheckBoxColumn
{
width: 23px;
height: 25px;
border-color: #BFBFBF;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 21px;
<% } else { %>
padding-left: 21px;
<% } %>
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}

.mscrm-documentRecommendation-EntitySelectionTableRow {
height : 25px;
}

.mscrm-documentRecommendation-TableGeneric
{
width:100%;
table-layout:fixed;
}

.mscrm-documentRecommendation-OverflowDiv
{
overflow-y: auto;
overflow-x: auto;
width:100%;
min-height:150px;
}

.mscrm-documentRecommendation-TableTitle
{
display: block;
font-size: 12px;
font-family: segoe UI;
color: #444;
}

.mscrm-documentRecommendation-EntityCheckBoxColumn
{
width: 30px;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
vertical-align: bottom;
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 18px;
<% } else { %>
padding-left: 18px;
<% } %>
white-space: nowrap;
text-overflow:ellipsis;
}

.mscrm-documentRecommendation-EntityNameColumn
{
width: 96%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
vertical-align: bottom;
font-family: segoe UI;
font-size: 12px;
color: #444;
}

.mscrm-documentRecommendation-Title
{
color:#444;
font-size : 28px;
padding-top : 8px;
font-family: segoe UI ;
}

.mscrm-documentRecommendation-basic-Button {
min-width: 60px;
height: 20px;
padding-left: 16px;
padding-right: 16px;
border: 1px solid #666666;
font-size: 12px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
width: auto;
}

.button-disabled {
color: graytext;
}

.button-enabled {
background: white;
color: #262626;
}

#txtExternalBaseUrl{
height:24px !important;
border-color: #cccccc !important;
}

.mscrm-documentRecommendation-EntityTable{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 35px;
<% } else { %>
margin-right: 35px;
<% } %>
}

.mscrm-documentRecommendation-ExternalSuggestions{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 35px;
<% } else { %>
margin-left: 35px;
<% } %>
}

.mscrm-documentRecommendation-Section-Title{
display: block;
margin-top: 20px;
font-weight: bold;
color: #000000;
font-size: 12px;
line-height:2;
}

.mscrm-documentRecommendation-TableDescription{
line-height:1.2;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
}