<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

@font-face {
font-family: CRMMDL2;
src: url("../_img/CRMMDL2.svg");
}

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
line-height: 32px;
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
.ms-crm-CrmAppForOutlook-requirementsBackground
{
padding: 5px;
margin-top: 37px;
background: #E4DCF4;
width: 778px;
font-family: Segoe UI !important;
font-style: normal;
font-weight: normal;
font-size: 12px !important;
line-height: 21px;
color: #000000;
}

.ms-crm-CrmAppForOutlook-requirementsTitle
{
font-weight: 600;
vertical-align: top;
margin-left: 5px;
}

.ms-crm-CrmAppForOutlook-requirementsSubtitle
{
vertical-align: top;
}

.ms-crm-CrmAppForOutlook-requirementsTitle:before
{
<% if (!CrmStyles.IsRightToLeft) { %>
font-family: CRMMDL2;
font-size: 24px;
font-weight: normal;
content: "\e783";
margin-right: 9px;
line-height: normal;
color: #6E6F77;
<% }%>
}

.ms-crm-CrmAppForOutlook-requirementsSubtitle:after
{
<% if (CrmStyles.IsRightToLeft) { %>
font-family: CRMMDL2;
font-size: 24px;
font-weight: normal;
content: "\e783";
margin-left: 9px;
line-height: normal;
color: #6E6F77;
<% }%>
}

.ms-crm-CrmAppForOutlook-requirementList
{
padding-inline-start: 60px;
margin-top: 0px;
margin-bottom: 5px;
margin-right: 5px;
}

.ms-crm-CrmAppForOutlook-documentationHeader
{
font-family: Segoe UI !important;
font-style: normal;
font-weight: normal;
line-height: 23px;
font-size: 20px;
color: #000000;
}

.ms-crm-CrmAppForOutlook-resourceList
{
margin-top:30px;
font-family: Segoe UI !important;
font-size: 13px !important;
line-height: 18px;
color: #000000;
}

.ms-crm-CrmAppForOutlook-learnMoreLink
{
font-family: Segoe UI !important;
font-size: 12px !important;
font-style: normal;
font-weight: normal;
line-heigth: 21px;
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

margin-top: 34px;
width: 20px;
padding-top: 2px;
}

.ms-crm-CrmAppForOutlook-autoAddDescription
{
font-family: Segoe UI;
font-size: 13px;
line-height: 15px;
color: #000000;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px;
<% }else{ %>
padding-left: 1px;
<% } %>
}

.ms-crm-CrmAppForOutlook-seeMoreLink
{
font-style: normal;
font-weight: normal !important;
line-height: 15px;
font-size: 13px;
text-decoration-line: underline !important;
color: #0066FF !important;
cursor: pointer;
}

.ms-crm-CrmAppForOutlook-autoAddTooltip
{
margin-left: 7px;
font-family: Segoe UI;
font-size: 13px;
line-height: 20px;
color: #000000;
}

.ms-crm-CrmAppForOutlook-save
{
margin-top: 15px;
width: 106px;
padding: 10px 12px 10px 12px;
background-color: #2266E3;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 2px;
text-align: center;
vertical-align: middle;
border: 1px solid transparent;
}
.ms-crm-CrmAppForOutlook-savetext
{
font-family: Segoe UI;
font-size: 14px;
font-weight: 600;
line-height: 14px;
font-size: 13px;
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