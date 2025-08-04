<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.navigationControl
{
margin: 0;
z-index: 999;
float: none;
width: 100%;
position: fixed;
top: 0;
overflow: hidden;
background-color: #000000;
}

.navigationControl blockquote, body
{
border: 0;
margin: 0;
padding: 0;
}

.navigationControl *, .navActionGroupContainer *, .navActionListContainer *, .navigationControl *:active, .navActionGroupContainer *:active, .navActionListContainer *:active, .navigationControl *:visited, .navActionGroupContainer *:visited, .navActionListContainer *:visited, .navigationControl *:link, .navActionGroupContainer *:link, .navActionListContainer *:link, .navStatusArea
{
font-family: "Segoe UI" , "Segoe" , Tahoma, Helvetica, Arial, sans-serif;
text-decoration: none;
}

.navigationControl:hover *
{
text-decoration: none;
}

.navigationControl blockquote, body, div, span
{
border: 0;
margin: 0;
padding: 0;
}

.navTabGroup > span:first-child + span + span.selected
{
background-color : #FFFFFF;
}

.navTabGroup > span:first-child + span + span.selected .navTabButtonArrowDown
{
background-image:url("/_imgs/NavBar/ArrowDown_blue.png");
border: 1px solid #FFFFFF;
}

.navTabGroupDiv
{
min-width: 460px;
}

.navTabButton, .navTabCrmLogoOutlook, .navTabSeparator, .navTabButton a, .navTabButton a:visited, .navTabButton a:link, .navTabSeparator a, .navTabSeparator a:visited, .navTabSeparator a:link, .O365Waffle
{
color: white;
border: 0;
background-color: transparent;

font-size: 10.5pt;
height: 50px;
display: inline;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
margin: 0;
}

.navTabButton.selected .navTabButtonImageSandbox, .navTabButton:hover .navTabButtonImageSandbox
{
border: 1px solid #DFE2E8 !important;
}

.navTabButton.selected .navTabButtonImagePreview, .navTabButton:hover .navTabButtonImagePreview
{
border: 1px solid #DFE2E8 !important;
}

.navTabButton.selected .navTabButtonImagePreview, .navTabButton:hover .navTabButtonImagePreview
{
border: 1px solid #DFE2E8 !important;
}

.navTabButton .removeBorder {
border-width: 0px !important;
border-style: none !important;
}

.navTabButton.selected .navTabButtonArrowDown,
.navTabButton.selected #navBarSettingsId,
.navTabButton.selected .navTabHelpImage,
.navTabButton.selected .homeButtonImage,
.navTabButton.selected .tabHomeButtonImage,
.navTabButton.selected #navTabGlobalCreateImage,
.navTabButton.selected .navTabHelpImage
{
border-width: 1px;
border-style: solid;
}

.navTabButton > a
{
padding: 0 10px;
}

.navTabButton:hover ,#TabUserInfoId:hover
{
text-decoration: none;
}

.navTabButton.selected
{
text-decoration: none;
}

.navTabButton.selected .tabHomeButtonImage, .navTabButton:hover .tabHomeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -71px -1px;
width: 16px;
height: 14px;
vertical-align: middle;
margin-right: 3px;
margin-left: 3px;
}

.navTabButton.selected .homeButtonImage, .navTabButton:hover .homeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -1px -27px;
width: 22px;
height: 14px;
vertical-align: middle;
}

#TabnavTabLogoTextId.navTabButton > a
{
padding : 0px
}

.navTabButton.selected #navTabLogoImage ,.navTabButton.selected:hover #navTabLogoImage
{
background-position: -27px -17px;
}

.navTabButton:hover #navTabLogoImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
}

.navTabButton:hover .navTabButtonArrowRight::after{
font-family: navIconFont;
content: "\e972";
font-size:11px;

}
.navTabButton.selected .navTabButtonArrowRight::after , .navTabButton.selected:hover .navTabButtonArrowRight::after{
font-family: navIconFont;
content: "\e972";
font-size:11px;

}

.navTabButton.selected #navBarSettingsId::after{
color: #333333;
}

.navTabButton.selected #navTabGlobalCreateImage::after{
color: #333333;
}

.navTabButton.selected .navImageFlipHorizontal::after{
color: #333333;
}

.navTabButton.selected .globalMruButtonImage::after{
color: #333333;
}

.navTabButton.selected #advancedFindImage::after{
color: #333333;
}

.navTabButton.selected #navTabButtonHelpImageId::after{
color: #333333;
}

.O365Waffle
{
background-color: #00b7c3;
}

.O365Waffle:hover
{
background-color: #006e75;
}

.O365Waffle_active
{
background-color: #333333;
}

.navTabButtonLink
{
color: white;
text-decoration: none;
border-width: 0;
display: inline-block;
cursor: default;
white-space: nowrap;
}

.navTabButtonRight .navTabButtonLink {
margin-right: 6px!important;
padding: 0px;
}

.navTabButtonImageContainer
{
display: table-cell;
height: 50px;
vertical-align: middle;
border: none;
font-size: 16px;
}

.navTabButtonImageContainer img, .navActionButtonIconContainer img, .navActionButtonDownImageContainer img, .navActionButtonSplitterContainer img
{
display: block;
border: none;
}

.navTabThemeButton > span.navTabButtonImageContainer
{
display: flex;
flex-direction: row;
align-items:  center;
}

.AppSwitcherButtonImage
{
background-image:url("/_imgs/NavBar/NavBarAppSwitcher.png");
background-repeat: no-repeat;
width: 16px;
height: 16px;
vertical-align: middle;
}

.navTabButtonModuleSwitcher > a
{
padding-right: 14px;
padding-left: 14px;
}

.navTabThemeButton > span.navTabButtonImageContainer
{
display: flex;
flex-direction: row;
align-items:  center;
}

.navTabButtonImageContainer
{
display: table-cell;
height: 50px;
vertical-align: middle;
border: none;
font-size: 16px;
}

.navTabButtonImageContainer img, .navActionButtonIconContainer img, .navActionButtonDownImageContainer img, .navActionButtonSplitterContainer img
{
display: block;
border: none;
}

.navTabDivider
{
width: 1px;
height: 50px;
opacity:0.3;
}

.navTabThemeButton
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 20px;
padding-right: 16px;
<% } else { %>
padding-left: 16px;
padding-right: 20px;
<% } %>
display: flex;
flex-direction: row;
align-items:  center;
}

.navTabThemeButton > span.navTabButtonImageContainer
{
display: flex;
flex-direction: row;
align-items:  center;
}

.navTabThemeButton > a > span >img
{
vertical-align: middle;
}

.navTabLogoTextThemeImage
{
display: table-cell;
vertical-align: middle;
max-width: 400px;
min-width: 50px;
overflow: hidden;
}

.navCustomHeader
{
font-size:20px;
font-weight:200;
line-height:48px;
color:#fff;
margin:0;
display:inline-block;
white-space:nowrap;
}

#TabAppSwitcherNode > a
{
padding: 0 17px;
}
#TabAppSwitcherNode > a:focus
{
outline-offset:-2px !important;
}