<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.previewBar {
height: 54px;
line-height: 54px;
background-color: #444444;
overflow: hidden;
width: 100%;
min-width: 760px;
}

.rightContainer {
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
padding: 0 20px;
}

.leftContainer {
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
padding: 0 20px;
}

.previewBarItem {
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
display: block;
height: 54px;
background-color: transparent;
border: 0;
text-decoration: none;
visibility: hidden;
}

.previewBarLabel {
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
max-width: 350px;
color: #ffffff;
}

.segoeUISemiBold {
font: normal normal normal 18px / 54px 'Segoe UI';
font-family: 'SegoeUI-Semibold', 'Segoe UI SemiBold', 'Segoe UI';
}

.segoeUILight {
font: normal normal normal 18px / 54px 'Segoe UI';
font-family: 'SegoeUI-Semilight', 'Segoe UI SemiLight', 'Segoe UI';
}

.centeredItem {
line-height: 54px;
text-align: center;
display: inline-block;
vertical-align: middle;
}

.previewBarButton {
height: 54px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
border: 0;
background-color: transparent;
margin: 0;
display: block;
padding: 0 9px;
}

.imageContainer {
height: 25px;
line-height: 54px;
text-align: center;
color: white;
display: inline-block;
text-decoration: none;
vertical-align: middle;
}

.image {
display: block;
background-repeat: no-repeat;
border: none;
vertical-align: middle;
line-height: 54px;
}

.tabletImage {
width: 30px;
height: 25px;
}

.phoneImage {
width: 14px;
height: 25px;
}

.tabletButton {
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 13px;
<% }
   else
   { %>
    padding-left: 13px;
<% } %>
}

body {
margin: 0;
height: 100%;
width: 100%;
}

.contentWrapper {
width: 100%;
padding: 0;
margin: 0;
box-sizing: border-box;
display: flex;
margin-bottom: 10px;
}

.deviceMock {
display: block;
padding: 20px;
background-color: #444444;
border: 2px solid;
border-radius: 10px;
-webkit-border-radius: 10px;
-moz-box-border-radius: 10px;
box-shadow: 7px 7px 10px -2px rgba(0,0,0,0.5);
-webkit-box-shadow: 7px 7px 10px -2px rgba(0,0,0,0.5);
-moz-box-shadow: 7px 7px 10px -2px rgba(0,0,0,0.5);
margin: auto;
overflow:hidden;
}

.contentFrame {
border: 0;
background-color: #ffffff;
}

.contextBar {
display: inline-block;
width:100%;
margin-top: 4px;
margin-bottom: 8px;
min-width: 760px;
}

.contextFont {
font: normal normal normal 12px 'Segoe UI';
}

.contextBarItem {
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
display: block;
height: 16px;
line-height: 16px;
background-color: transparent;
border: 0;
text-decoration: none;
}

.contextBarLabel {
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
max-width: 350px;
color: #444444;
}

.contextBar .centeredItem {
height: 16px;
line-height: 16px;
text-align: center;
display: inline-block;
padding: 0;
}

.contextBarButton {
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
line-height: 16px;
height: 16px;
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
display: block;
}

.contextButton {
color: #115fb7;
}