<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

DIV.Notifications
{
background-color: #FFF19D;
border: 1px solid #DDDDDD;
overflow: auto;
}
DIV.Notification
{
color: #000000;
}
DIV.Notifications-qrk
{
padding: 1%;
}
DIV.Notification-qrk
{
width: 98%;
padding-top: 2px;
padding-bottom: 2px;
}
DIV.Notifications-strict
{
padding: 5px;
}

DIV.Notifications-strict-bottom
{
position: relative;
right: 0px;
left: 0px;
overflow-x: hidden;
}

.ie7 DIV.Notifications-strict-bottom
{
bottom: 0px;

}

.ms-crm-NotificationCheckBox
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 0px;
    margin-left: 7px;
<% }
   else
   { %>
    margin-right: 7px;
    margin-left: 0px;
<% } %>
width: 16px;
padding: 0px;
cursor: pointer;
height: 1.5 em;
}

.ms-crm-DuplicateDetectionLink
{
color: #444444 !important;
text-decoration: none !important;
cursor: pointer;
display: inline;
}
.ms-crm-DuplicateDetectionLink span
{
padding-top: 3px;
padding-bottom: 3px;
padding-left: 16px;
padding-right:16px;
border: 1px solid #D6D6D6;
background-color: #FFFFFF;
}