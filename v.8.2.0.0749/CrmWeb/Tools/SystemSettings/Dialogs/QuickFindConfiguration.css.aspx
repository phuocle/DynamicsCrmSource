<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>


DIV.ms-crm-QuickFindConfigDialog-Header
{
border-bottom-style: solid;
border-bottom-width: 1px;
vertical-align: top;
padding: 5px;
}

DIV.ms-crm-QuickFindConfigDialog-Main
{
position: absolute;
width: 100%;
vertical-align: top;
border-bottom-style: none;
background-color: rgb(233, 237, 241);
}

_:-ms-lang(x), _:-webkit-full-screen, div.ms-crm-QuickFindConfigDialog-Main {
top: 78px !important;
}

DIV.ms-crm-QuickFindConfigDialog-List
{
position: absolute;
left: 0px;
right: 0px;
bottom: 0px;
overflow-y: scroll;
width: 100%;
background-color: #FFFFFF;
border: 1px solid #949E9C;
}

.ms-crm-QuickFindConfigDialog-AvailableAttributesColumn,
.ms-crm-QuickFindConfigDialog-ButtonsColumn,
.ms-crm-QuickFindConfigDialog-SelectedAttributesColumn
{
top: 5px;
bottom: 5px;
position: absolute;
}

.ms-crm-QuickFindConfigDialog-AvailableAttributesColumn
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right: 5px;
<% }
   else
   { %>
    left: 5px;
<% } %>
width: 40%;
}

.ms-crm-QuickFindConfigDialog-ButtonsColumn
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    right: 40%;
<% }
   else
   { %>
    left: 40%;
<% } %>
}

.ms-crm-QuickFindConfigDialog-ButtonsColumn > ul
{
position: relative;
}

.ms-crm-QuickFindConfigDialog-SelectedAttributesColumn
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    left: 5px;
<% }
   else
   { %>
    right: 5px;
<% } %>
width: 40%;
}

.ms-crm-QuickFindConfigDialog-ListLabel
{
height: 10px;
}

.ms-crm-QuickFindConfigDialog-NoteLabel
{
font-family: Segoe UI,Tahoma,Arial;
font-size:12px;
color: #444444;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-left:30px;
<% }
   else
   { %>
    margin-right:30px;
<% } %>
}

.ms-crm-QuickFindConfigDialog-NoteString
{
font-family: Segoe UI,Tahoma,Arial;
font-size:12px;
color: #444444;
font-weight: bold;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
   { %>
    margin-right:30px;
<% }
   else
   { %>
    margin-left:30px;
<% } %>
}