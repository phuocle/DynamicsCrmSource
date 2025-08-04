<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


.powerAppsNavBar
{
display: flex;
justify-content: space-between;
height: 48px;
background-color: #742774;
font-size: 14px;
font-family :Segoe UI;
color: #FFFFFF;
letter-spacing: 0;
}

h1.powerAppsNavBarBrandName,
h2.powerAppsNavBarDesignerName,
h3.powerAppsNavBarComponentName
{
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
color: #FFFFFF;
}

.powerAppsNavBar h1.powerAppsNavBarBrandName
{
font-family: 'Segoe UI', Tahoma, sans-serif;
font-weight: 200;
font-size: 22px;
height: 30px;
width: 108px;
margin: 7px 20px 11px 20px;
}

.powerAppsNavBar h2.powerAppsNavBarDesignerName,
.powerAppsNavBar h3.powerAppsNavBarComponentName
{
font-family: 'Segoe UI', Tahoma, sans-serif;
font-weight: 200;
max-width: 340px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
}

.powerAppsNavBar h3.powerAppsNavBarComponentName{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 20px;
<% } else { %>
padding-right: 20px;
<% } %>
}

@media all and (max-width: 620px) {
.powerAppsNavBar h3.powerAppsNavBarComponentName {
max-width: 145px;
}
}

.powerAppsNavBarFloatLeft, .powerAppsNavBarFloatRight
{
display: flex;
align-items: center;
}

.powerAppsNavBarDivider,
.powerAppsNavBarDividerRight
{
height: 48px;
width: 1px;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
<% } else { %>
padding-right: 10px;
<% } %>
color: #A6A6A6 !important;
opacity: 0.3 !important;
}

.powerAppsNavBarDivider
{
height: 36px;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 6px 0px 6px 20px;
<% } else { %>
padding: 6px 20px 6px 0px;
<% } %>

}

.powerAppsNavBarUserName, .powerAppsNavBarOrgName
{
font-size: 11px;
font-family: 'Segoe UI', Tahoma, sans-serif;
max-width: 91px;
height: 15px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
margin: 0px 0px 0px 5px;
<% } else { %>
text-align: right;
margin: 0px 5px 0px 0px;
<% } %>
}

.powerAppsNavBarUserName
{
max-width: 84px;
}
.powerAppsNavBarOrgName
{
opacity: 0.7;
}

.powerAppsNavBarUserImg
{
width: 28px;
height: 28px;
vertical-align: middle;
border: none;
border-radius: 28px;
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0px 5px 0px 10px;
<% } else { %>
margin: 0px 10px 0px 5px;
<% } %>
}
