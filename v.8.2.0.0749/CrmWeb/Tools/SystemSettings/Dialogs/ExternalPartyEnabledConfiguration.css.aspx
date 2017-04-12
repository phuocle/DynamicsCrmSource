<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>


DIV.ms-crm-ExternalPartyEnabledConfigDialog-Header
{
border-bottom-style: solid;
border-bottom-width: 1px;
vertical-align: top;
padding: 5px;
}

DIV.ms-crm-ExternalPartyEnabledConfigDialog-Main
{
position: absolute;
width: 100%;
vertical-align: top;
border-bottom-style: none;
background-color: rgb(233, 237, 241);
}

DIV.ms-crm-ExternalPartyEnabledConfigDialog-List
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

.ms-crm-ExternalPartyEnabledConfigDialog-AvailableAttributesColumn,
.ms-crm-ExternalPartyEnabledConfigDialog-ButtonsColumn,
.ms-crm-ExternalPartyEnabledConfigDialog-SelectedAttributesColumn
{
top: 5px;
bottom: 5px;
position: absolute;
}

.ms-crm-ExternalPartyEnabledConfigDialog-AvailableAttributesColumn
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

.ms-crm-ExternalPartyEnabledConfigDialog-ButtonsColumn
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

.ms-crm-ExternalPartyEnabledConfigDialog-ButtonsColumn > ul
{
position: relative;
}

.ms-crm-ExternalPartyEnabledConfigDialog-SelectedAttributesColumn
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

.ms-crm-ExternalPartyEnabledConfigDialog-ListLabel
{
height: 10px;
}