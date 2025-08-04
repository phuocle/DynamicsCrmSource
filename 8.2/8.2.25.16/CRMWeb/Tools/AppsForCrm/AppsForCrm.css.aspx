<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.ms-crm-appsForDynamicsCrm-bodyContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% }else{ %>
margin-left: 30px;
<% } %>
margin-top: 30px;
margin-bottom: 50px;
width: 710px;
word-wrap: break-word;
}
#headerTitle
{
height: 80px;
vertical-align: middle;
width: 710px;
}
.ms-crm-appsForDynamicsCrm-sectionHeader
{
margin-top: 20px;
width: 710px;
}
#subHeaderTitle
{
margin-top: 35px;
width: 710px;
}
#crmAppsIcon
{
background-color: #002050;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
height: 80px;
position: relative;
width: 80px;
}
#crmAppsIcon img
{
display: block;
margin-left: auto;
margin-right: auto;
vertical-align: middle;
}
.ms-crm-icon
{
height: auto;
width: 16px;
padding-bottom: 0em;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
}
.ms-crm-appsForDynamicsCrm-messages
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% }else{ %>
margin-left: 30px;
<% } %>

margin-top: 20px;
margin-bottom: 20px;
padding-left: 6px;

}
.ms-crm-appsForDynamicsCrm-messages-text
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% }else{ %>
padding-left: 6px;
<% } %>
width: 650px;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 13px;
line-height: 16px;
color: #000000;
word-wrap: break-word;
}
.ms-crm-appsForDynamicsCrm-messages-text-title
{
font-weight: bold;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% }else{ %>
padding-left: 6px;
<% } %>
}
.ms-crm-appsForDynamicsCrm-messages-text-regular
{
font-weight:normal;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% }else{ %>
padding-left: 6px;
<% } %>
}
.ms-crm-appsForDynamicsCrm-messages-error-text
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% }else{ %>
padding-left: 6px;
<% } %>
width: 450px;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 13px;
line-height: 16px;
color: #ca0000;
word-wrap: break-word;
}

.ms-crm-appsForDynamicsCrm-messages-links-text
{
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 13px;
color: #0072c5;
text-decoration: underline;
}
.ms-crm-appsForDynamicsCrm-messages-links-text a
{
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 13px;
color: #0072c5;
text-decoration: underline;
}
.ms-crm-appsForDynamicsCrm-messages-links-text a:hover
{
text-decoration: underline;
}
.ms-crm-Image-VAlign
{
vertical-align: middle;
}
.ms-crm-appsForDynamicsCrm-message
{
color: #000000;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 13px;
line-height: 16px;
width: 450px;
word-wrap: break-word;
}
.hidden
{
display:none;
}
#crmAppsTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
height: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 20px;
<% }else{ %>
margin-left: 20px;
<% } %>
width: 600px;
}
.ms-crm-appsForDynamicsCrm-title
{
color: #000000;
font-family: "SegoeUI-Semilight", "Segoe UI Semilight","Segoe UI",Verdana,Arial,sans-serif;;
font-size: 28px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 610px;
}
.ms-crm-appsForDynamicsCrm-subTitle
{
color: #000000;
font-family: "SegoeUI-Semilight", "Segoe UI Semilight","Segoe UI",Verdana,Arial,sans-serif;;
font-size: 20px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 710px;
}
.ms-crm-appsForDynamicsCrm-text-regular
{
color: #000000;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 13px;
line-height: 18px;
margin-top: 6px;
word-wrap: break-word;
}
.ms-crm-appsForDynamicsCrm-text-regular a
{
color: #0072c5;
text-decoration: underline;
}
.ms-crm-appsForDynamicsCrm-text-regular a:hover
{
color: #0072c5;
text-decoration: underline;
}
.ms-crm-appsForDynamicsCrm-link-bold
{
color: #000000;
font-family: "SegoeUI-Bold", "Segoe UI Bold", "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
font-size: 14px;
font-weight: bold;
margin-top: 6px;
text-decoration: none;
}
ul#horizontalButtons
{
list-style: none;
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% }else{ %>
padding-left: 0px;
<% } %>
padding-top: 6px;
}
ul#horizontalButtons li
{
display: inline;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 20px;
<% }else{ %>
margin-right: 20px;
<% } %>
}
.ms-crm-appsForDynamicsCrm-Footer
{
margin: 0;
}
.ms-crm-appsForDynamicsCrm-Button
{
background-color: #0072c5;
border: 0px;
color: #fff;
cursor: pointer;
font-family: "SegoeUI-Semibold","Segoe UI WPC Semibold","Segoe UI Semibold","Segoe UI",Tahoma,"Microsoft Sans Serif",Verdana,sans-serif;
font-size: 14px;
height: 40px;
min-width: 20px;
padding-left: 15px;
padding-right: 15px;
text-align: center;
white-space: nowrap;
width: auto;
}
.ms-crm-appsForDynamicsCrm-Button:hover
{
background-color: #6194cd;
}
.ms-crm-appsForDynamicsCrm-Button:active
{
background-color: #00508a;
}
.ms-crm-appsForDynamicsCrm-detail-message
{
margin: 10px 10px 10px 10px;
border: 1px #ca0000 solid;
width: 450px;
z-index: 1;
position: absolute;
background-color: #ffffff;
box-shadow: 7px 7px 5px #888888;
}
.ms-crm-appsForDynamicsCrm-detail-message-text
{
margin: 10px 32px 10px 10px;
}
.ms-crm-popup-icon
{
height: auto;
width: 12px;
margin-top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:10px;
<% }else{ %>
margin-right:10px;
<% } %>
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
<% }else{ %>
float:right;
<% } %>
}
#iconClose
{
border:0px;
cursor: pointer;
}
.ms-crm-image-noborder
{
border:0px;
}
a:hover
{
cursor:pointer !important;
} 