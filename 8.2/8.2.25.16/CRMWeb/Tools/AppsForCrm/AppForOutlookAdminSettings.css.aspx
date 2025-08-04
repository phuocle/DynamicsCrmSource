<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.crmapp-top
{
bottom: 0;
width: 100%;
}
li.ms-crm-Menu-Spacer
{
display: none;
}
.ms-crm-crmgrid-Container
{
position: absolute;
height: 50%;
width: 710px;
}
table.ms-crm-List-Index
{
visibility: visible !important;
}
div.ms-crm-grid-BodyContainer
{
position: absolute;
}
.ms-crm-crmAppForOutlook-bodyContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% }else{ %>
margin-left: 30px;
<% } %>

}
.ms-crm-CrmAppForOutlook-title
{
margin-top: 60px;
font-family: Segoe UI Semilight, Segoe UI, sans-serif !important;
font-size: 28px !important;
color: #000000;
}
.ms-crm-CrmAppForOutlook-subtitle
{
font-family: Segoe UI !important;
font-size: 13px !important;
line-height: 18px;
color: #000000;
}
.ms-crm-CrmAppForOutlook-learnMoreLink
{
font-family: Segoe UI !important;
font-size: 13px !important;
color: #0072c5 !important;
text-decoration: underline !important;
}
.ms-crm-CrmAppForOutlook-settings
{
font-family: Segoe UI Semilight, Segoe UI, sans-serif !important;
font-size: 20px !important;
color: #000000;
}
.ms-crm-CrmAppForOutlook-editLink
{
font-family: Segoe UI !important;
font-size: 12px !important;
color: #0072c5 !important;
text-decoration: underline !important;
cursor: pointer;
}
.ms-crm-CrmAppForOutlook-autoAddTitle
{
font-family: Segoe UI;
font-size: 14px;
font-weight: Bold;
color: #000000;
}

.ms-crm-CrmAppForOutlook-autoAddSubtitle
{
font-family: Segoe UI;
font-size: 13px;
color: #000000;
padding-top: 2px;
}
.ms-crm-CrmAppForOutlook-autoAddCheckbox
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:30px;
<% }else{ %>
padding-left:30px;
<% } %>

width: 20px;
padding-top: 2px;
}
.ms-crm-CrmAppForOutlook-autoAddDescription
{
font-family: Segoe UI;
font-size: 13px;
color: #000000;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px;
<% }else{ %>
padding-left: 1px;
<% } %>

}
.ms-crm-CrmAppForOutlook-save
{
width: 70px;
padding: 12px;
background-color :#0072c5;
text-align: center;
vertical-align: middle;
}
.ms-crm-CrmAppForOutlook-savetext
{
font-family: 'Segoe UI SemiBold';
font-size: 14px;
color: #ffffff;
}
.ms-crm-CrmAppForOutlook-savehover:hover
{
background-color: #6194cd;
}
#appCommand
{
font-family: Segoe UI;
font-size: 13px;
color: #000000;
padding-top: 2px;
font-weight: bold;
overflow-x: scroll;
overflow-y:hidden;
}
span.ms-crm-View-Name
{
font-size: 20px;
font-family: Segoe UI Semilight, Segoe UI, sans-serif;
padding: 0px;
font-weight: lighter;
}
td.ms-crm-List-DataCell
{
font-size: 12px;
font-family: Segoe UI;
}
.ms-crm-View-Name
{
vertical-align:top !important;
}
.ms-crm-Menu-ButtonFirst
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% }else{ %>
padding-left: 2px;
<% } %>

}
.ms-crm-appgridmenubar
{
border-color: #C6C6C6 !important;
}