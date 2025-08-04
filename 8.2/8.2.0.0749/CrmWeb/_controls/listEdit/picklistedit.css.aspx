<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


DIV.listEdit_valuelist
{
background: #ffffff;
height: 100%;
overflow: auto;
}



TR.listEdit_vspacer
{
height: 5px;
}

TR.param > td
{
padding-top: 5px;
}


TD.listEdit_hspacer
{
width: 5px;
}


TD.listEdit_dropdown
{
width: 245px;
}

td.ms-crm-Picklist_Menubar_Item
{
border:0px;
}

td.ms-crm-Picklist_DefaultLabel
{
width: 145px;
}

td.ms-crm-Picklist-Section
{
padding-left: 2px;
padding-right: 2px;
}

img.ms-crm-Picklist-MenuButton
{
width: 16px;
height: 16px;
vertical-align: top;
margin-left: 1px;
margin-right: 2px;
}
table.ms-crm-Picklist-MenuBar
{
color: #000000;
height: 20px;
overflow: hidden;
width: 100%;
border: 1px solid #A5ACB5;
background-image: url(/_imgs/picklist/GridToolbarBkgd_White.png);
background-repeat: repeat-x;
}

td.ms-crm-Picklist-Values
{
vertical-align: top;
height:190px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding-right: 2px;
<% }
   else
   { %>
    text-align: left;
    padding-left: 2px;
<% } %>
}
tr.ms-crm-Picklist-MenuBar
{
height:20px;
}

tr.ms-crm-Picklist-List
{
height:99%;
}

table.ms-crm-Picklist-List
{
width: 100%;
height:99%;
table-layout: fixed;
border-left: 1px solid #A5ACB5;
border-right: 1px solid #A5ACB5;
border-bottom: 1px solid #A5ACB5;
}

SPAN.ms-crm-optionset-Label
{
margin-left: 1px;
margin-right: 1px;
height: 18px;
padding-left: 0px;
padding-right:0px;
padding-top: 2px;
padding-bottom: 1px;
cursor: default;
}

SPAN.ms-crm-optionset-Label,
SPAN.ms-crm-optionset-Label-Opened,
SPAN.ms-crm-optionset-Label-Hovered
{
margin-top: 2px;
}

SPAN.ms-crm-optionset-Label-Opened
{
margin-left: 1px;
margin-right: 1px;
padding-left: 0px;
padding-right: 0px;
padding-top: 2px;
padding-bottom: 1px;
height: 18px;
background-image: url(/_imgs/toolbar_msdown.gif);
background-repeat: repeat-x;
white-space: nowrap;
}

SPAN.ms-crm-optionset-Label-Hovered
{
margin-left: 1px;
margin-right: 1px;
padding-left: 0px;
padding-right: 0px;
padding-top: 2px;
padding-bottom: 1px;
height: 18px;
background-repeat: repeat-x;
}