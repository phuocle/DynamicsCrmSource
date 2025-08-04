<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

A.ms-crm-Nav-Area,
A.ms-crm-Nav-Area:link,
A.ms-crm-Nav-Area:visited,
A.ms-crm-Nav-Area:active,
A.ms-crm-Nav-Area:hover
{
vertical-align: middle;
color: #15428b;
cursor: pointer;
}

NOBR.ms-crm-Nav-Area-Title
{
height: 24px;
padding-top: 4px;
width: 70%;
}

TABLE.ms-crm-Nav-Area
{
height: 32;
vertical-align: top;
border-bottom: solid 1 #6693cf;
cursor: pointer;
background-image: url(/_imgs/wunderbar_rest.gif);
background-repeat: repeat-x;
table-layout: fixed;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 5px;
<% }
   else
   { %>
    padding-left: 5px;
<% } %>
}

TABLE.ms-crm-Nav-Area-Selected
{
color: #000000;
}

TABLE.ms-crm-Nav-Area-Hovered
{
background-image: url(/_imgs/wunderbar_hover.gif);
background-repeat: repeat-x;
}