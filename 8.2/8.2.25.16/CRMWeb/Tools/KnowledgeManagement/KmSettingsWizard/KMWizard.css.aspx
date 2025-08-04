<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

TD.km-wizard-HeaderColumn1
{
width: 10%;
height: 24px;
color: #376092;
border-style: solid;
border-width: 1px 1px 0px 1px;
border-color: #B2B2B2;
border-spacing: 0px;
background-color: #F2F2F2;
text-align: center;
vertical-align: middle;
white-space: nowrap;
text-overflow:ellipsis;
}

TD.km-wizard-HeaderColumn2
{
width: 90%;
height: 24px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #376092;
border-style: solid;
border-width: 1px 1px 0px 0px;
border-color: #B2B2B2;
border-spacing: 0px;
background-color: #F2F2F2;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right: 10px;
<% } else { %>
text-align: left;
padding-left: 10px;
<% } %>
vertical-align: middle;
white-space: nowrap;
text-overflow:ellipsis;
}

TD.mscrm-docmgmt-RowColumn1
{
width: 10%;
height: 20px;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
text-align: center;
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}

TD.mscrm-docmgmt-RowColumn2
{
width: 90%;
height: 20px;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right: 10px;
<% } else { %>
text-align: left;
padding-left: 10px;
<% } %>
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}

TABLE.mscrm-docmgmt-TableGeneric
{
table-layout:fixed;
}

Table.km-wizard-TableGeneric TD
{
overflow: hidden;
text-overflow: ellipsis;
}

TABLE.km-wizard-TableEntities
{
width:100%;
height:218px;
table-layout:fixed;
background-color:#FFFFFF;
border:solid 1px #B2B2B2;
}

DIV.km-wizard-OverflowDiv
{
overflow-y: auto;
overflow-x: hidden;
width:100%;
height:180px;
background-color:#FFFFFF;
}

#siteUrlTextTable
{
table-layout:fixed;
}

.required:after
{
content: "*";
color: #FF0000;
}

TABLE#siteUrlTextTable td:nth-child(even)
{
border : solid 1px #c6c6c6;
}

TABLE#siteUrlTextTable td:nth-child(odd)
{
color:#000000;
font-family:SEGOE UI;
font-size:11px
}

TABLE#siteUrlTextTable
{
border-spacing : 5px;
}

.siteURL
{
background-color:#f0f0f0;
}

TABLE#SupportURLText
{
border-spacing: 0px 26px;
}

TABLE#nativeCRMDetailsTextTable
{
border-spacing : 5px;
}

TABLE#knowledgeSolutionTextTable
{
border-spacing : 5px;
}

.KM-Wizard-TextFont
{
color:#444444;
font-family:SEGOE UI;
font-size:11px
}

.km-wizard-entity
{
border:1px solid #b2b2b2;
}

.km-wizard-url-format
{
font-family:Segoe UI Semibold;
color:#000000;
font-size:11px;
}