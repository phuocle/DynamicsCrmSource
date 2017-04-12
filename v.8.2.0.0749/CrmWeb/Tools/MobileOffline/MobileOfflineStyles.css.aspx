<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

body, .textBlock
{
font-family: "Segoe UI";
font-size: 11.5px;
color: #000000;
}


body
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 45px;
<% }
   else
   { %>
    padding-left: 45px;
<% } %>
padding-top: 20px;
}

.bodyNew
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 30px !important;
<% }
   else
   { %>
    padding-left: 30px !important;
<% } %>
padding-top: 30px !important;
}

#scrollContainer {
height: 90%;
overflow-y: auto;
}

.textBlock
{
padding: 0px;
margin: 0px;
position: relative;
font-family: "Segoe UI";
font-size: 11.5px;
color: #000000;
min-width: 668px;
}

div.textBlock p
{
margin: 0px;
padding: 0px;
position: relative;
bottom: 0px;
}

div.configTitle
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
<% } %>
height: 65px;
}

div.configTitle p
{
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 16px;
position: relative;
left: -10px;
top: 40px;
}

div#configTitle p
{
width: 90%;
}

div.firstPara
{
padding-top: 20px;
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

.buttonsDiv
{
padding-top: 40px;
}

.indent
{
padding-left: 25px;
}

input.MobileOfflineSelect
{
width: auto;
margin-right: 4px;
padding: 0px;
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

button
{
margin-right: 8px;
width:auto;
}

.provisioning-errorMessage
{
color:#000000;
}

.provisioning-statusMessage
{
color:#000000;
}

#disclaimerPart p
{
margin: 16px 0px 0px 0px;
}

div.disclaimerTitle
{
height: 68px;
vertical-align: bottom;
}

div.disclaimerTitle span
{
color: #262626;
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 36px;
font-weight: lighter;
margin: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 0px 0px 0px 70px;
<% }
   else
   { %>
    padding: 0px 70px 0px 0px;
<% } %>
position: relative;
bottom: 0px;
min-width: 0px;
}

div#disclaimerTitle
{
width: 90%;
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

.hide
{
opacity:0.25;
}

div.radioButtonDiv
{
display: inline-block;
}

.nodisplay
{
display: none;
}

#configPart div.validConfigContent div.textBlock
{
font-weight: 400;
font-size: 12px;
color: #444444;
}

#progressBar
{
width:12px;
height:40px;
padding: 0px;
}

.lastUpdateString
{
font-size: 12px !important;
color: #444444;
padding-top: 24px;
padding-bottom: 0px;

}

#progressBlock table
{
margin-top: 50px;
font-weight: 400;

}

#progressBlock table td
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:15px;
<% }
   else
   { %>
    padding-left:15px;
<% } %>
color: #444444;
font-size: 14px;
}

div.enableDisableProvisioning a button
{
font-weight: 300;
height: 40px;
color: #fff;
border:0px;
padding-left : 15px;
padding-right : 15px;
margin: 0px !important;
}

.green
{
background:#009E49 !important;
}

.red
{
background:#E71022 !important;
}

.orange
{
background:#FF8C00 !important;
}

button[id="buttonConfigure"]:enabled
{
background: #0072C6 !important;
}

button[id="buttonConfigure"]:disabled
{
background: #B1D6F0 !important;
}

div.configTitleNew p
{
color: #444444;
font-family: Segoe UI;
font-weight: 300;
font-size: 18px;
position: relative;
padding-top : 30px;
}

div.noteParaNew
{
padding-top: 30px;
}

div.mobileOfflineProvisioningTitleNew label
{
font-family:Segoe UI;
font-weight:300;
font-size: 28px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:0px;
<% }
   else
   { %>
    padding-left:0px;
<% } %>
color: #000 !important;
}


div.mobileOfflineProvisioningTitle label
{
font-family:Segoe UI Light, Segoe UI, Tahoma, Arial;
font-size: 24px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 0px !important;
<% }
   else
   { %>
    padding-left: 0px !important;
<% } %>
}

.progresstd
{
padding: 0px;
}