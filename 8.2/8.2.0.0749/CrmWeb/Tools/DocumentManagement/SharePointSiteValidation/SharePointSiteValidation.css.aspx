<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TABLE.mscrm-validate-TableGeneric
{
width:100%;
table-layout:fixed;
}
TD.mscrm-validate-summaryColumn1
{
height: 25px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding-right: 10px;
<% }
   else
   { %>
    text-align: left;
    padding-left: 10px;
<% } %>
vertical-align: middle;
text-overflow:ellipsis;
}
TD.mscrm-validate-summaryColumn2
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
<% } %>
}

DIV.mscrm-validate-OverflowDiv
{
overflow-y: auto;
overflow-x: auto;
width:100%;
height:226px;
}

TD.mscrm-validate-HeaderColumn
{
height: 25px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #376092;
border-style: solid;
border-width: 0px 1px 1px 0px;
border-color: #BFBFBF;
border-spacing: 0px;
background-color: #FFFFFF;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding-right: 10px;
<% }
   else
   { %>
    text-align: left;
    padding-left: 10px;
<% } %>
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}
TD.mscrm-validate-Column1-width
{
width: 15%;
}
TD.mscrm-validate-Column2-width
{
width: 35%;
}
TD.mscrm-validate-Column3-width
{
width: 10%;
}
TD.mscrm-validate-Column4-width
{
width: 40%;
}

TD.mscrm-validate-RowColumn
{
height: 23px;
color: #000000;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: #BFBFBF;
background-color: #FFFFFF;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding-right: 10px;
<% }
   else
   { %>
    text-align: left;
    padding-left: 10px;
<% } %>
vertical-align: middle;
overflow: hidden;
white-space: nowrap;
text-overflow:ellipsis;
}
TD.mscrm-validate-Success
{
color: #00C000;
}
TD.mscrm-validate-Failure
{
color: #FF0000;
}
A.mscrm-underlineOnHover:hover
{
text-decoration: underline;
}