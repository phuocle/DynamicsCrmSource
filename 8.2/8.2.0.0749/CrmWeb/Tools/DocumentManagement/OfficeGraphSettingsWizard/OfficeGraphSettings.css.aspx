<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TD.mscrm-ofcGraph-HeaderColumn1
{
width: 10%;
height: 25px;
color: #376092;
border-style: solid;
border-width: 1px 1px 0px 1px;
border-color: #BFBFBF;
border-spacing: 0px;
background-color: #F2F2F2;
text-align: center;
vertical-align: middle;
white-space: nowrap;
text-overflow:ellipsis;
}

TD.mscrm-ofcGraph-HeaderColumn2
{
width: 90%;
height: 25px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #376092;
border-style: solid;
border-width: 1px 1px 0px 0px;
border-color: #BFBFBF;
border-spacing: 0px;
background-color: #F2F2F2;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
vertical-align: middle;
padding-left: 10px;
white-space: nowrap;
text-overflow:ellipsis;
}

TD.mscrm-ofcGraph-RowColumn1
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

TD.mscrm-ofcGraph-RowColumn2
{
width: 90%;
height: 20px;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
vertical-align: middle;
padding-left: 10px;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}

TD.mscrm-createDL-entityName-RowColumn
{
width: 20%;
height: 20px;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
vertical-align: middle;
white-space: nowrap;
text-overflow:ellipsis;
padding-left: 10px;
}

TABLE.mscrm-ofcGraph-TableGeneric
{
table-layout:fixed;
}

Table.mscrm-ofcGraph-TableGeneric TD
{
overflow: hidden;
text-overflow: ellipsis;
}

TABLE.mscrm-ofcGraph-TableEntities
{
width:100%;
height:218px;
table-layout:fixed;
background-color:#FFFFFF;
}

DIV.mscrm-ofcGraph-OverflowDiv
{
overflow-y: auto;
overflow-x: hidden;
width:100%;
height:218px;
background-color:#FFFFFF;
}

TD.mscrm-ofcGraph-LeftColumn
{
width:5%;
vertical-align:top;
}

TD.mscrm-ofcGraph-WarningMessage
{
background-color:#FFFFCC;
}

#warningMessageTable
{
border:1px solid #808080;
padding:5px 5px 5px 5px;
}

.required:after
{
content: "*";
}

.ms-crm-Validation-Progress
{
height: 100%;
width: 100%;
background-color: #ffffff;
top: 0px;
bottom: 0px
}