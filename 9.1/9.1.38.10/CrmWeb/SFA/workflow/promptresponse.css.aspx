<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



TABLE.responseTable
{
border: 2px solid;
border-color: #B6B9BD;
}

div.outerTable,
TABLE.outerTable
{
border: 2px solid;
border-color: #B6B9BD;
margin-left: 5px;
margin-right: 5px;
}

TABLE.outerTable
{
width:99%;
}

table.hyperlinkInserter
{
width: 100%;
height: 100%;
table-layout: fixed;
background-color:#FFFFFF;
border:1px solid #7b9ebd;
padding:0px;
}

DIV.prHyperlinkBar
{
color: #000000;
height: 25px;
overflow: hidden;
width: 100%;
background-image: url(/_imgs/gridtoolbar_back.gif);
background-repeat: repeat-x;
}

.prDesigner
{
padding-bottom:10px;
padding-left:10px;
padding-right:10px;
}

div.picklistSection,
td.picklistSection
{
vertical-align:	top;
height:105px;
}

td.queryDisplayCol
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:14px;
<% } else { %>
padding-left:14px;
<% } %>
}

SPAN.cndFldValue
{
width: 200px;
height: 100%;
vertical-align: middle;
}

DIV.CategoryList
{
width: 100%;
overflow: visible;
}

TD.cndFormAssistantArea
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:7px;
<% } else { %>
padding-left:7px;
<% } %>
}

tr.queryConditionRow
{
height: 40px;
}

tr.queryDisplayRow
{
height: 30px;
padding-top: 5px;
}


.ms-crm-TableRow-Hidden
{
display: none;
}

.ms-crm-TableRow-Visible
{
display: table-row;
}

.ms-crm-TableRow-Hidden .ms-crm-Input-Container
{
display: none;
}

.hyperlinkInserter SPAN.ms-crm-DataSlugBody
{
border:none;
}