<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

html
{
overflow: hidden;
}

body.stage
{
overflow-x: hidden;
}

div.abVSep
{
width: 4px;
cursor: col-resize;
position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
right: 207px;
<% } else { %>
left: 207px;
<% } %>
}

div.overlay
{
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
z-index: 5000;
}

div.abHSep
{
cursor: row-resize;
position: absolute;
z-index: 1;
bottom: 5px !important;
<% if (CrmStyles.IsRightToLeft) { %>
left: 148px;
right: 0px;
<% } else { %>
left: 0px;
right: 148px;
<% } %>
}



div.calendarPane
{
width: 158px;
vertical-align:	top;
padding: 3px;

position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
}

div.ganttPane
{
height: 100%;
position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 148px;
right: 0px;
<% } else { %>
left: 0px;
right: 148px;
<% } %>
}

div.primaryPane
{
position: absolute;
top: 59px;
bottom: 20px !important;
left: 0px;
right: 0px;
}

div.detailedPane
{
display: none;
height: 173px;
position: absolute;
bottom: 2px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 148px;
right: 0px;
<% } else { %>
left: 0px;
right: 148px;
<% } %>
}

span.calendarTitle
{
color: #000000;
}

hr.separator
{
height:1px;
}
