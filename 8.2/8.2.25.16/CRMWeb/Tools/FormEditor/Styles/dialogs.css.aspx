<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

SELECT, TEXTAREA
{
width:				100%;
}
TABLE.example
{
background-color:	#ffffff;
border:				1px solid #6699cc;
}
TABLE.selected
{
background-color:	#ffffff;
border:				2px solid #000000;
}
TD.example
{
background-color:	#eeeeee;
border:				1px solid #6699cc;
}
TD.active
{
background-color:	#ffc739;
}
.ms-crm-Field-Required
{
overflow:			hidden;
text-overflow:		ellipsis;
}
DIV.ms-crm-library-container
{
background: #ffffff;
border: 1px solid #6699cc;
overflow-y: auto;
overflow-x: hidden;
}
TR.ms-crm-library-header-row
{
background-color:#dddddd;
}
TR.ms-crm-library-on-row
{
background-color:#eaeaff;
cursor:	pointer;
}
TR.ms-crm-library-off-row
{
background: #ffffff;
cursor:	pointer;
}
TH.ms-crm-library-header-cell
{
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
width:100%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	2px;
<% } else { %>
padding-left:	2px;
<% } %>
}
TD.ms-crm-library-cell
{
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
width:100%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:	2px;
<% } else { %>
padding-left:	2px;
<% } %>
}