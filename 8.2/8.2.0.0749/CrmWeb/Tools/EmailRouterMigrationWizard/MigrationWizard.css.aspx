<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


TABLE.mscrm-iw-TableGeneric
{
width: 100%;
}

TABLE.mscrm-iw-ProgressTable
{
position:absolute;
height: 100%;
width: 100%;
}

TABLE.mscrm-iw-TableGenericWidth
{
width: 100%;
table-layout: fixed;
}

TABLE.mscrm-iw-MergedProfileTable
{
width: 75%;
table-layout: fixed;
}

DIV.mscrm-iw-DivGeneric
{
width: 100%;
height: 100%;
}

DIV.mscrm-iw-ProgressDiv
{
display: none;
width: 100%;
height: 100%;
cursor: wait;
}

DIV.mscrm-iw-BorderedDivBlueBackground
{
background-color: #E3EFFF;
}

DIV.mscrm-iw-BorderedDivBlueBackground
{
padding: 5px;
}

DIV.mscrm-iw-BorderedDivWhiteBackground,
DIV.mscrm-iw-BorderedDivBlueBackground,
.mscrm-iw-PageWidth
{
width: 75%;
}

DIV.mscrm-iw-BorderedDivWhiteBackground,
DIV.mscrm-iw-BorderedDivBlueBackground,
.mscrm-iw-Border
{
border: #7f9db9 1px solid;
}

DIV.mscrm-iw-addButtonDivStyle
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 5px;
<% }
   else
   { %>
    padding-left: 5px;
<% } %>
padding-top: 7px;
}

LI.mscrm-iw-orderedListItem
{
margin-top: 2em;
color: #c0c0c0;

}

OL.mscrm-iw-orderedList
{
list-style-type: decimal;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 15px;
<% }
   else
   { %>
    padding-left: 15px;
<% } %>
}


UL.mscrm-iw-unorderlist
{
list-style-type: disc;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 15px;
<% }
   else
   { %>
    padding-left: 15px;
<% } %>
}

INPUT.mscrm-iw-yes-radio-class
{
width: 5%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: -2px;
<% }
   else
   { %>
    margin-left: -2px;
<% } %>
}

INPUT.mscrm-iw-no-radio-class
{
width: 5%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left: 4px;
<% } %>
}