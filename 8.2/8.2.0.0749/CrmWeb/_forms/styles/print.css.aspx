<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

BODY
{
background-color: #ffffff;
}

DIV.ms-crm-Tab-Print
{
padding: 10px;
}

IMG.icon
{
height: 15px;
width: 15px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 2px;
    margin-left: 5px;
<% }
   else
   { %>
    margin-left: 2px;
    margin-right: 5px;
<% } %>
}

TD.ms-crm-Form-Section,
DIV.ms-crm-Form-Section
{
width: 100%;
color: #606050;
padding-bottom: 2px;
text-overflow: ellipsis;
overflow: hidden;
}

TD.ms-crm-Form-SectionBar,
DIV.ms-crm-Form-SectionBar
{
border-bottom: 1px solid #838574;
}

.ms-crm-Form-Background
{
background-image: none!important;
}

NOBR.ms-crm-Form-Title-Data-Print
{
line-height: normal;
}

NOBR.ms-crm-Form-Title-Label-Print
{
line-height: normal;
}
DIV.ms-crm-Form-Title-Data-Print
{
line-height: normal;
}

DIV.ms-crm-Form-Title-Label-Print
{
line-height: normal;
width:100%;
float: left;
}
.printForm
{
width: 100%;
height: 100%;
border-style: none;
position:absolute;
overflow:auto;
}

@media print
{
.ms-crm-List-Row
{
page-break-inside:avoid;
}
.tr
{
page-break-inside:avoid;
}
.gridprintcontainer
{
overflow:visible;
}

.ms-crm-grid-BodyContainer,
.ms-crm-List-DataArea
{
overflow:visible !important;
}
}