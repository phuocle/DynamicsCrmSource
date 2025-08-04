<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>



body, .textBlock
{
font-family: "Segoe UI";
font-size: 11.5px;
color: #000000;
min-width: 668px;
}

body
{
padding-left: 45px;
padding-top: 0px;
}

#scrollContainer {
height: 100%;
overflow-y: auto;
}

#disclaimerPart p
{
margin: 16px 0px 0px 0px;
}

.textBlock
{
padding: 0px;
margin: 0px;
position: relative;
}

div.textBlock p
{
margin: 0px;
padding: 0px;
position: relative;
bottom: 0px;
}

div.disclaimerTitle
{
height: 68px;
vertical-align: bottom;
}

div.disclaimerTitle span
{
background-image: url(/_imgs/tools/ico_45_yammer.png);
background-repeat: no-repeat;
<% if (CrmStyles.IsRightToLeft) { %>
background-position: left top;
<% } else { %>
background-position: right top;
<% } %>
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 36px;
font-weight: lighter;
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 0px 0px 70px;
<% } else { %>
padding: 0px 70px 0px 0px;
<% } %>
position: relative;
bottom: 0px;
min-width: 0px;
}

div.configTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 208px;
<% } else { %>
padding-left: 208px;
<% } %>
padding-top: 18px;
height: 65px;
background-image: url(/_imgs/tools/188_40_Yammer_Logo.gif);
background-repeat: no-repeat;
<% if (CrmStyles.IsRightToLeft) { %>
background-position: right bottom;
<% } else { %>
background-position: left bottom;
<% } %>
}

div.configTitle p
{
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 21px;
font-weight: lighter;
position: relative;
left: -10px;
top: 38px;
}

div.firstPara
{
padding-top: 20px;
}
div.footer
{
margin: 0px;
}

div.secondPara
{
padding-top: 4px;
}

div.notePara
{
padding-top: 9px;
}

div.noteLanguage
{
padding-top: 16px;
}

div.noteActivityFeeds
{
padding-top: 16px;
}

div.congratsTitle
{
padding-top: 34px;
}

div.congratsTitle p
{
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 21px;
font-weight: lighter;
}

div.congratsFirstPara
{
padding-top: 9px;
}

div.congratsSecondPara
{
padding-top: 4px;
}

div.authPara
{
padding-top: 4px;
}

div.groupPara
{
padding-top: 12px;
}

div#stepAuthorize p
{
padding: 0px;
}

.buttonsDiv
{
padding-top: 40px;
}

a, a:hover, a:visited, a:link, a:active
{
color: #115fb7;
}

a.authorizeLink
{
color: #115fb7;
font-family: "Segoe UI";
font-size: 14px;
}

a.disabled {
color: #5b626c;
cursor: default;
}

button
{
margin-right: 8px;
width:auto;
}

ol li
{
margin-left: -24px;
margin-bottom: 0px;
margin-top: 0px;

}

.list
{
margin-top: 44px;
}


li.item-group
{
margin-top: 16px;
}

li.item-security
{
margin-top: 19px;
}

.list-item, .overlay-holder
{
position: relative;
}

.overlay
{
position: absolute;
left: 0px;
top: 0px;
width: 100%;
height: 100%;
float: left;
background-color: #fff;
z-index: 9999;
opacity: 0.75;
-moz-opacity:0.75;
filter:alpha(opacity=75);
}

.indent
{
padding-left: 25px;
}

.groupSelect
{
margin-left: 15px;
margin-right: 10px;
width: 250px;
min-width: 250px;
font-size: 12px;
padding: 2px 4px;
}

.ui-autocomplete.ui-menu
{

max-height: 210px;
}

input.securitySelect
{
width: auto;
margin-right: 4px;
padding: 0px;
}

input.securitySelect.related
{
padding-top: 3px;
}

.radioLabel.spacer
{
padding-top: 7px;
}

.radioLabel
{
padding-top: 2px;
}

div.radioLabel label, input[type="radio"]
{
font-size: 11.5px;
vertical-align: middle;
}

.check
{
width: 16px;
height: 16px;
margin-left: 10px;
margin-right: 20px;
}

.hide
{
display: none;
}

.clear
{
clear: both;
display: block;
}

.networkName
{
font-weight: bold;
}
