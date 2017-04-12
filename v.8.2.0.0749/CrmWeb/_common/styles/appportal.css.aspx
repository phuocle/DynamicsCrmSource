<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


/**============================================**/
/** NEW APP Portal Global Master Styles **/
/**============================================**/

html
{
overflow:auto;
}

body,html,form
{
height:100%;
direction: <% = CrmStyles.BodyDirection %>;
}

h1
{
color: #6BC6FF;
font-family: "Segoe UI Light", Arial, Sans-Serif;
color:#272626;
font-size:28px;
font-weight:normal;
}

h2
{
white-space:nowrap;
font-family:"Segoe UI Light", Arial, Sans-Serif;
font-size:20px;
font-weight:normal;
color:#262626;
text-overflow:ellipsis;
overflow:hidden;
}

body
{
font-style: normal;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #000000;
background: #fff;
min-width: 800px;
}

p
{
line-height:16px;
color:#666666;
font-size:12px;
font-family:"Segoe UI", Arial, Sans-Serif;
}

img
{
border:0;
}

* {
margin:0;
padding:0;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

td a.toolbarbutton img
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 6px;
<% }
   else
   { %>
    margin-right: 6px;
<% } %>
}

td a.toolbarbutton:last-of-type img
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 6px;
<% }
   else
   { %>
    margin-left: 6px;
<% } %>
}


a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: underline; }


body.GlobalBody
{
height: 100%;
width: 100%;
}

table.GlobalCenterTable
{
top: 68px;
bottom:50px;
height:100%;
width:800px;
margin-left:auto;
margin-right:auto;
}

div.GlobalHeaderContainer
{
height: 68px;
width: 800px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    background: url('/_imgs/crmmastheadlogo.png') no-repeat 330px 16px;
    float:right;
<% }
   else
   { %>
    background: url('/_imgs/crmmastheadlogo.png') no-repeat 330px 16px;
    float:left;
<% } %>
}

div.GlobalHeaderLogo
{

}

div.GlobalContentBox
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

div.GlobalAuthPanelContainer
{
height:68px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:left;
<% }
   else
   { %>
    float:right;
<% } %>
overflow:hidden;
}

div.GlobalAuthPanel
{
margin-top: 7px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:left;
    margin-left: 15px;
<% }
   else
   { %>
    text-align:right;
    margin-right: 15px;
<% } %>
overflow:hidden;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

div.GlobalContentDiv
{
width: 783px;
min-height: inherit;
height: inherit;
background-color:#FFFFFF;
}

div.GlobalFooterContent
{
width: 783px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
border: none;
}

div.GlobalFooter
{
border: none;
width:800px;
background-color:#FFFFFF
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}

div.GlobalFooterLeft
{
color:#666666;
font-size:12px;
font-family:"Segoe UI", Arial, Sans-Serif;
margin-top: 15px;
margin-bottom: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-right: 50px;
<% }
   else
   { %>
    float: left;
    margin-left: 50px;
<% } %>
}

div.GlobalFooterRight
{
margin-top: 15px;
margin-bottom: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
    margin-left: 50px;
<% }
   else
   { %>
    float: right;
    margin-right: 50px;
<% } %>
color:#0072C6;
font-size:11px;
font-family:"Segoe UI", Arial, Sans-Serif;
}

div.GlobalFooterRight a
{
color:#0072C6;
}

div.H1Spacer
{
padding-top: 20px;
}

div.H2Spacer
{
padding-top: 10px;
}

.FloatLeft
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float:left;
<% } %>
}

.FloatRight
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:left;
<% }
   else
   { %>
    float: right;
<% } %>
}

div.H2PaddingLeft
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:20px;
<% }
   else
   { %>
    padding-left:20px;
<% } %>
}

div.H2PaddingRight
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:20px;
<% }
   else
   { %>
    padding-right:20px;
<% } %>
}

div.H1MarginLeft
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:40px
<% }
   else
   { %>
    margin-left:40px
<% } %>
}

div.ClearBoth
{
clear:both;
}

/**============================================**/
/** APP Portal Child pages styles **/
/**============================================**/

div.AppPortalContentDiv
{
margin-top: 20px;
margin-right: 50px;
margin-left: 50px;
margin-bottom: 20px;
}

div.CurrencyDiv
{
line-height:16px;
color:#666666;
font-size:11px;
font-family:"Segoe UI", Arial, Sans-Serif;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    padding-left:56px;
<% }
   else
   { %>
    float:left;
    padding-right:56px;
<% } %>
}

div.CurrencyValueDiv
{
line-height:16px;
color:#666666;
font-size:11px;
font-family:"Segoe UI", Arial, Sans-Serif;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float:left;
<% } %>
}

div.CurrencyLinkDiv
{
padding-top:5px;
color: #1261E1;
}

div.ConfigureCRM
{

}

div.BaseCurrencyColumns
{
width: 490px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 50px;
<% }
   else
   { %>
    margin-left: 50px;
<% } %>
}

div.CurrencyPickerButtonsContainer
{
}

.errorMessageText
{
color:red;
}

/**============================================**/
/** Watermarktextbox styles **/
/**============================================**/

.WatermarkTextBox_Gray
{
color: gray;
font-style: italic;
border:1px solid #cccccc;
height:20px;
vertical-align:middle;
line-height:20px;
}
.WatermarkTextBox_Normal
{
border:1px solid #cccccc;
border:1px solid #cccccc;
height:20px;
vertical-align:middle;
line-height:20px;
}

.WatermarkTextBox_Red
{
color: red;
border:1px solid #cccccc;
height:20px;
vertical-align:middle;
line-height:20px;
}

.WatermarkTextBox_Disabled
{
background: #E6E6E6;
border:1px solid #cccccc;
height:20px;
vertical-align:middle;
line-height:20px;
}

/**============================================**/
/** AppPortalButton styles **/
/**============================================**/

.PortalButtonPrimary,.PortalButtonSecondary,.PortalButtonStrong
{
line-height: 15px;
width:auto;
font-size: 100%;
height: 2.2em;
color: #333;
padding: 4px;
background-color:#FFFFFF;
}

.PortalButtonStrong,
.PortalButtonSecondary,
.PortalButtonPrimary
{
background-image:none;
border: solid 1px #a2adc3;
}

.PortalButtonStrong:hover,
.PortalButtonSecondary:hover,
.PortalButtonPrimary:hover
{
background-color:#D7EBF9;
}

.PortalButtonStrong:focus,
.PortalButtonSecondary:focus,
.PortalButtonPrimary:focus
{
background-color:#B1D6F0;
}

/** BookmarkLink **/
.BookmarkLink_Text
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 8px;
<% }
   else
   { %>
    padding-left: 8px;
<% } %>
}

/**============================================**/
/** First run experience page styles **/
/**============================================**/

.LabelHeading
{
font-weight:bold;
}

.ActionDetails
{
margin-bottom: 9px;
}

.CurrencyHelpPadding
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right : 50px;
<% }
   else
   { %>
    padding-left : 50px;
<% } %>
}

div.SpinnerExternalContentMargin
{
padding-top:23px;
margin-right: 40px;
margin-left: 40px;
}

div.AppPortalConfigureHeaderWidth
{

}

.NotificationImage
{
height: 32px;
width: 32px;
}

div.NotificationDiv
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:55px;
<% }
   else
   { %>
    margin-left:55px;
<% } %>
margin-top:0px;
line-height:16px;
color:#666666;
font-size:12px;
font-family:"Segoe UI", Arial, Sans-Serif;
}
div.AdminOnlyTitle
{
font-weight: bold;
}

div.AdminOnlyMessage
{
display: block;
padding: 10px;
border: 2px solid #666;
margin-top: 10px;
font-style: italic;
min-height: 3.8em;
}

span.NotificationTitle
{
white-space:nowrap;
font-family:"Segoe UI", Arial, Sans-Serif;
font-size:19px;
line-height:1em;
font-weight:normal;
color:#262626;
padding-bottom:50px;
}

div.NotificationItem
{
width:650px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:-55px;
<% }
   else
   { %>
    margin-left:-55px;
<% } %>
}

.AuthUserName
{
line-height:14px;
white-space:nowrap;
text-overflow:ellipsis;
color:#444444;
font-weight:bold;
font-size:11px;
font-family:"Segoe UI", Arial, Sans-Serif;
}

a.AuthSignoutLink
{
line-height:14px;
white-space:nowrap;
text-overflow:ellipsis;
color:#0072C6;
font-size:11px;
font-family:"Segoe UI", Arial, Sans-Serif;
}

.padb5
{
padding-bottom:5px;
}

.padb10
{
padding-bottom:10px;
}

.padb20
{
padding-bottom:20px;
}

.padb25
{
padding-bottom:25px;
}

.padb30
{
padding-bottom:30px;
}

.padb40
{
padding-bottom:40px;
}

.padb60
{
padding-bottom:60px;
}

.padb70
{
padding-bottom:70px;
}

.padr20
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 20px;
<% }
   else
   { %>
    padding-right: 20px;
<% } %>
}

.CurrencyTitleContainer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% }
   else
   { %>
    float:left;
<% } %>
height:20px;
}

.CurrencyTileHelpIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:20px;
    float:right;
<% }
   else
   { %>
    padding-left:20px;
    float:left;
<% } %>
height:20px;
line-height:20px;
margin-top:8px;
}

.FormDropDown
{
width:200px;
border:1px solid #cccccc;
}

.CurrencyList
{
width:200px;
border:1px solid #cccccc;
}

.CurrencyMode label
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:5px;
<% }
   else
   { %>
    padding-left:5px;
<% } %>
}

.CurrencyMode input[type="radio"]
{
line-height:20px;
vertical-align:middle;
}

.CustomCurrencyLink
{
width:200px;
}

.RedText
{
color:red;
}

.CustomCurrencyHidden
{
display:none;
}

.CustomCurrencyVisible
{
display:inline;
}

.ButtonDivider
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:5px;

<% }
   else
   { %>
    padding-right:5px;
<% } %>
}

.VideoTitle
{
margin-left:50px;
margin-right:50px;
}