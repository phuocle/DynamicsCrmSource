<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.crmAppMessageBar
{
margin-left:2px;
margin-right:2px;
z-index: 980;
overflow: hidden;
background-color: #FFF19D;
border: 1px solid #D7D889;
}

.crmAppMessageBarLeftBorder
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.crmAppMessageBarRightBorder
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.crmAppMessageBarIcon
{
vertical-align: top;
padding-top: 5px;
}

.crmAppMessageBarTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% } else { %>
padding-left: 6px;
<% } %>
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
color: #262626;
height: 32px;
vertical-align: middle;
}

.crmAppMessageBarMessageTable
{
position: absolute;
top: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
right: 6px;
<% } else { %>
left: 6px;
<% } %>
height: 32px;
display:inline-block;
}

.crmAppMessageBarMessageDiv
{
overflow:hidden;
max-height: 29px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 3px;
<% } else { %>
padding-right: 3px;
<% } %>
}

.crmAppMessageBarMessage
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
color: #444444;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 14px;
padding-left: 10px;
<% } else { %>
padding-left: 14px;
padding-right: 10px;
<% } %>
}

.crmAppMessageBarButtonContainer
{
display: inline-block;
height: 25px;
vertical-align: middle;
}

.crmAppMessageBarSpacer
{
width: 80px;
}

.crmAppMessageBarRow
{
vertical-align: middle;
}

a.crmAppMessageBarButton span
{
background-repeat: no-repeat;
display: block;
outline: none;
padding: 4px 11px 6px 12px;
height: 12px;
}

a.crmAppMessageBarButton
{
cursor: pointer;
background-repeat: no-repeat;
background-attachment: scroll;
background-position: top right;
display: block;
height: 22px;
text-decoration: none;
margin-right: 2px;
padding-right: 2px;
color: #444444;
}

.ms-crm-msgbar_button_cold,
.ms-crm-msgbar_button_hover,
.ms-crm-msgbar_button_click
{
border: 1px solid #D7D889;
}

a.crmAppMessageBarButton:hover span
{
background-repeat: no-repeat;
}

a.crmAppMessageBarButton:hover
{
background-repeat: no-repeat;
background-attachment: scroll;
background-position: top right;
}

a.crmAppMessageBarButtonClick span
{
background-repeat: no-repeat;
}

a.crmAppMessageBarButtonClick
{
background-repeat: no-repeat;
background-attachment: scroll;
background-position: top right;
}

a.crmAppMessageBarCloseButton
{
display: block;
height: 16px;
width: 16px;
}

a.crmAppMessageBarCloseButton:hover
{
background-repeat: no-repeat;
background-attachment: scroll;
background-position: center;
}

a.crmAppMessageBarCloseButtonPressed
{
background-repeat: no-repeat;
background-attachment: scroll;
background-position: center;
}

.crmAppMessageBarCloseButtonContainer
{
position: absolute;
top: 8px;

<% if (CrmStyles.IsRightToLeft) { %>
left: 8px;
<% } else { %>
right: 8px;
<% } %>
}

a.crmAppMessageBarHyperlink:hover
{
text-decoration: underline;
}