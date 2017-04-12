<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

UL.WelcomeSteps
{
list-style-type: disc;
margin-bottom: 10px;
margin-left: 30px;
margin-top: 10px;
}

UL.WelcomeSteps LI
{
padding-bottom: 5px;
padding-top: 5px;
}

input.HiddenRadio
{
height: 0px;
width: 0px;
border: 0px;
cursor: pointer;
position:absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: -3000px;
<% }
   else
   { %>
    left: -3000px;
<% } %>
}

ul.Groupings
{
list-style-type: none;
}

li.Grouping
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px;
<% }
   else
   { %>
    margin-left: 10px;
<% } %>
padding: 5px;
}

li.Grouping span.ColumnOrGroupingHeader,
td.Column
{
background-color: #D6E8FF;
border: solid 1px #6693CF;
}

li.Grouping div.SelectedColumnOrGroupingHeader,
div.SelectedColumnOrGroupingHeader
{
border: solid 2px #189B0D;
}

.ColumnsContainerCell
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 60px;
<% }
   else
   { %>
    padding-left: 60px;
<% } %>
height:100%;
}

div.ColumnsContainer
{
border: solid 1px #6693CF;
height: 100%;
overflow-x: scroll;
overflow-y: auto;
padding-left: 2px;
padding-right: 2px
}

div.ColumnOrGroupingHeader
{
padding: 2px;
text-align: center;
width: 96px;
}

div.EmptyGhostHeader
{
background-color: #FFFFFF;
border: dashed 1px #6693CF;
height: 1em;
padding: 2px;
width: 146px;
}

span.ColumnGhost
{
width: 150px;
}

.GhostHeader
{
background-color: #E3EFFF;
border: dashed 1px #6693CF;
padding: 2px;
text-align: center;
vertical-align: middle;
width: 150px;
}

img.Sort
{
vertical-align: middle;
display: none;
}

ul.ms-crm-AdHocWizard-MinorReportFormat
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 18px;
<% }
   else
   { %>
    padding-left: 18px;
<% } %>
}

img.ms-crm-AdHocWizard-FormatType
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 30px;
<% }
   else
   { %>
    margin-left: 30px;
<% } %>
margin-bottom: 10px;
}

img.ms-crm-AdHocWizard-ChartType
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    <%= FlipImage("h") %>
<% } %>
vertical-align: middle;
}

table.MaxWidth
{
table-layout: fixed;
width: 98%;
}

td.ms-crm-AdHocWizard-ChartFormat
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-left: 1px solid #96B3DD;
<% }
   else
   { %>
    border-right: 1px solid #96B3DD;
<% } %>
}

td.ms-crm-AdHocWizard-NewSection
{
padding-top: 15px;
}

td.ms-crm-AdHocWizard-PreviewImage
{
text-align: center;
}

td.YAxis
{
padding: 10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
<% }
   else
   { %>
    text-align: right;
<% } %>
vertical-align: middle;
}

td.XAxis
{
padding: 10px;
text-align: center;
}