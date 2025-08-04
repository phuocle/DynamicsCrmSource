<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>






















#crmMasthead
{
width: 100%;
height: 40px;
background-color: rgb(0, 32, 80);
overflow: hidden;
}

#crmMasthead HiddenNavBar
{
height: 0px;
}

.navigationControl
{
background-color: #002050;
margin: 0;
z-index: 999;
float: left;
width: 100%;
position: relative;
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



.navTabGroupDiv
{
min-width: 460px;
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

.navTabButtonLabel
{
text-align: center;
display: table-cell;
line-height: 40px;
vertical-align: middle;
max-width: 200px;
}

.navTabButtonText
{
display: block;
margin-top: 3px;
height: 37px;
max-width: 135px;
text-overflow: ellipsis;
overflow: hidden;
}

.navTabButtonImageContainer
{
display: table-cell;
height: 40px;
vertical-align: middle;
border: none;
}

.navTabButtonImageContainer img, .navActionButtonIconContainer img, .navActionButtonDownImageContainer img, .navActionButtonSplitterContainer img
{
display: block;
border: none;
}

.navTabButtonLeftImageContainer img
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 4px;
<% } else { %>
padding-right: 4px;
<% } %>
}

.navActionButtonDownImageContainer img
{
margin: auto;
}

.navTabButton, .navTabCrmLogoOutlook, .navTabSeparator, .navTabButton a, .navTabButton a:visited, .navTabButton a:link, .navTabSeparator a, .navTabSeparator a:visited, .navTabSeparator a:link
{
color: white;
border: 0;
background-color: transparent;
font-size: 10.5pt;
height: 40px;
display: inline;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
margin: 0;
}

<% if (Request.Browser.Browser == "IE") { %>
.navTabButton .navTabButtonArrowDown, .navTabButton #navBarSettingsId,
.navTabButton .navTabHelpImage, .navTabButton .homeButtonImage,
.navTabButton #navTabLogoImage, .navTabButton #navTabGlobalCreateImage,
.navTabButton .navTabHelpImage
{
border: 1px solid #002050;
}

.navTabButtonImageSandbox
{
border: 1px solid #E06F07 !important;
}

.navTabButton.selected .navTabButtonImageSandbox, .navTabButton:hover .navTabButtonImageSandbox
{
border: 1px solid #DFE2E8 !important;
}

.navTabButtonImagePreview
{
border: 1px solid #E06F07 !important;
}

.navTabButton.selected .navTabButtonImagePreview, .navTabButton:hover .navTabButtonImagePreview
{
border: 1px solid #DFE2E8 !important;
}

.navTabButton.selected .navTabButtonArrowDown, .navTabButton:hover .navTabButtonArrowDown,
.navTabButton.selected #navBarSettingsId,.navTabButton:hover #navBarSettingsId,
.navTabButton.selected .navTabHelpImage,.navTabButton:hover .navTabHelpImage,
.navTabButton.selected .homeButtonImage, .navTabButton:hover .homeButtonImage,
.navTabButton.selected #navTabLogoImage,.navTabButton:hover #navTabLogoImage,
.navTabButton.selected #navTabGlobalCreateImage, .navTabButton:hover #navTabGlobalCreateImage,
.navTabButton.selected .navTabHelpImage,.navTabButton:hover .navTabHelpImage
{
border: 1px solid #DFE2E8;
}
<% } %>

<% if (Request.Browser.Browser == "Firefox") { %>
.navActionButton:focus, .navActionButton a:focus
{
box-shadow: inset 0 0 5px white;
}
<% } %>


.navTabFiller
{
height: 40px;
overflow: hidden;
}

.sandbox
{
background-color: #E06F07;
}

.sandboxWatermark
{
color: #FFFFFF;
font-family: 'Segoe UI Light';
font-size: 36px;
line-height: 36px;
text-align: center;
opacity: 0.3;
}

.preview
{
background-color: #E06F07;
}

.previewWatermark
{
color: #FFFFFF;
font-family: 'Segoe UI Light';
font-size: 36px;
line-height: 36px;
text-align: center;
opacity: 0.3;
}

.navTabQuickCreateSpacer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
display: block;
height: 40px;
width: 100px;
}

.navBarTopLevelItem
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.navBarTopLevelItemIE8Fix
{
max-width: 181px;
}

.navTabBackButton
{
display: table-cell;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 0px;
margin-right: 0px;
<% } else { %>
float: left;
margin-right: 0px;
margin-left: 0px;
<% } %>
margin-top: 1px;
}

.navTabDisabledButton
{
padding: 0 12px;
}

.navTabBackButton .navTabDisabledButton
{
visibility: hidden;
}

.navTabButton > a
{
padding: 0 12px;
}

.navHomeButton
{
margin: 0;
}

.navFloatRight
{
margin: 0;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.navTabButtonLeft > a
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 0;
padding-left: 8px;
<% } else { %>
margin-right: 0;
padding-right: 8px;
<% } %>
}

.navTabButtonRight > a
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0;
padding-right: 0;
<% } else { %>
margin-left: 0;
padding-left: 0;
<% } %>
}

.navTabButtonLeft, .navTabButtonRight
{
display: table-cell;
vertical-align: middle
}

.navTabButtonLeftIE8Fix
{
max-width: 150px;
}

.navTabButton.selected, .navTabButton:hover
{
background-color: #DFE2E8;
text-decoration: none;
}

.navTabButton.selected a, .navTabButton:hover a
{
color: #002050;
}

#navBarSettingsId
{
background-image:url("/_imgs/NavBar/NavBarSettings.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

.navTabButton.selected #navBarSettingsId, .navTabButton:hover #navBarSettingsId
{
background-image: url("/_imgs/NavBar/NavBarSettings_blue.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

#navTabButtonHelpImageId
{
background-image:url("/_imgs/NavBar/NavBarHelp.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

.navTabButton.selected #navTabButtonHelpImageId, .navTabButton:hover #navTabButtonHelpImageId
{
background-image:url("/_imgs/NavBar/NavBarHelp_blue.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

#navTabGlobalCreateImage
{
background-image:url("/_imgs/NavBar/NavBarGlobalQuickCreate.png");
background-repeat: no-repeat;
width: 24px;
height: 24px;
vertical-align: middle;
}

.navTabButton.selected #navTabGlobalCreateImage, .navTabButton:hover #navTabGlobalCreateImage
{
background-image:url("/_imgs/NavBar/NavBarGlobalQuickCreate_blue.png");
background-repeat: no-repeat;
width: 24px;
height: 24px;
vertical-align: middle;
}

.homeButtonImage
{
background-image:url("/_imgs/NavBar/NavBarHome.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

.navTabButton.selected .homeButtonImage, .navTabButton:hover .homeButtonImage
{
background-image:url("/_imgs/NavBar/NavBarHome_blue.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

#navTabLogoImage
{
background-image:url("/_imgs/NavBar/NavBarLogo.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

.navTabButton.selected #navTabLogoImage, .navTabButton:hover #navTabLogoImage
{
background-image:url("/_imgs/NavBar/NavBarLogo_blue.png");
background-repeat: no-repeat;
width: 18px;
height: 16px;
vertical-align: middle;
}

.navTabButtonArrowDown {
background-image:url("/_imgs/NavBar/ArrowDown.png");
background-repeat: no-repeat;
width:10px;
height: 16px;
vertical-align: middle;
background-position: center;
}

.navTabButton.selected .navTabButtonArrowDown, .navTabButton:hover .navTabButtonArrowDown
{
background-image:url("/_imgs/NavBar/ArrowDown_blue.png");
background-repeat: no-repeat;
width:10px;
height: 16px;
vertical-align: middle;
background-position: center;
}

.navTabSplitter
{
width: 1px;
height: 40px;
opacity: 0.5;
filter: alpha(opacity=50);
}

.navTabButtonArrowDown
{
border: none;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 6px;
<% } else { %>
margin-left: 6px;
<% } %>
margin-top: 8px;
}

.navTabButtonUserInfo > a
{
padding: 0;
}

.navTabButtonSettings > a, .navTabButtonHelp > a
{
padding: 0 8px;
}

.navTabButtonModuleSwitcher > a
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

.navTabButtonUserInfoText
{
font-size: 12px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
display: block;
text-transform: none;
line-height: normal;
max-width: 110px;
overflow: hidden;
text-overflow: ellipsis;
padding: 0 10px;
<% if (Request.Browser.Browser == "IE" && System.Web.HttpContext.Current.Request.Browser.MajorVersion == 8) { %>
width: 110px;
<% } %>
}

.navTabButtonUserInfoWorker
{
font-weight: bold;
}

.navTabButtonUserInfoCompany
{
font-weight: 500;
}

.navTabButtonUserInfoProfileImage
{
width: 40px;
height: 40px;
}

.navCrmLogo
{
display: table-cell;
direction: ltr;
}

.navTabLogoText
{
display: table-cell;
vertical-align: middle;
padding-top: 2px;
text-transform: none;
font-size: 17px;
}

.logoButtonImage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 6px;
<% } else { %>
margin-right: 6px;
<% } %>
}

.homeButtonImage
{
margin-top: 1px;
}

.navTabModuleButton
{
text-transform: uppercase;
font-weight: 600;
}

.globalCreateButtonImage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 5px;
<% } else { %>
margin-right: 5px;
<% } %>
}

.navTabHidden
{
display: none;
}

.navTabButtonNarrowText
{
max-width: 33px;
}

.navTabCrmLogoOutlook
{
padding: 0 12px;
}



.navTabDisableHover.selected, .navTabDisableHover:hover
{
background-color: #DFE2E8;
text-decoration: none;
}



.navActionGroupContainer, .navActionListContainer
{
width: 100%;
position: absolute;
z-index: 9999;
overflow: hidden;
white-space: nowrap;
}

.navActionGroupContainer
{
top: 40px;
background-color: black;
}

.navActionListContainer
{
top: 160px;
border-top: 1px solid #FFFFFF;
background-color: #FFFFFF;
}
.navActionListContainer .nav-scrl
{
background-image: url('/_imgs/navbar/SiteMapFlyoutDropdown.png');
background-position: bottom;
background-repeat:repeat-x;
}
.navActionGroup
{
clear: both;
overflow: auto;
padding: 8px;
left: 0;
right: 0;
z-index: 9999;
display: inline-block;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
<% } else { %>
margin-right: 10px;
<% } %>
}

#leftNavLink,
#rightNavLink
{
display: block;
height: 100%;
width: 100%;
}



.navActionButtonContainer
{
width: 184px;
height: 70px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 12px;
<% } else { %>
margin-right: 12px;
<% } %>
display: inline-block;
}

.navActionGroupContainer .navActionButtonContainer
{
border: 2px solid #DFE2E8;
}

.navActionListControl .navActionButtonContainer
{
border: 2px solid #384f71;
}

.navActionGroupContainer .navActionButtonContainer.selected,
.navActionListControl .navActionButtonContainer.selected
{
border: 2px solid #DFE2E8;
border-radius: 2px;
}

.navActionButton




{
background-color: #555555;
position: relative;
color: white;
width: 184px;
height: 70px;
display: inline-block;
vertical-align: top;
font-family: 'Segoe UI';
font-size: 12px;
text-decoration: none;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
cursor: default;
}

.navActionButton:hover
{
background-image: url('/_imgs/NavBar/Dot030.png');
text-decoration: none;
}

.navModuleButton
{
background-color: #2D74EA;
}

.navActionButtonNarrow
{
width: 37px !important;
background-color: #C0172B !important;
}

.navActionButtonLeft
{
width: 155px;
}

.navActionButtonSplitter
{
width: 1px;
height: 70px;
opacity: 0.15;
filter: alpha(opacity=15);
}

.navActionButtonRight
{
width: 29px;
}

.navActionButtonLeft.selected,
.navActionButtonRight.selected
{
background-image: url('/_imgs/NavBar/Dot030.png');
}

.navModuleButtonShadow,
.navActionButtonNarrowShadow,
.navActionButtonContainerShadow,
.navActionButtonShadow,
.navActionButtonSmallShadow
{
height: 16px;
font-size: 16px;
display: block;
}

.navModuleButtonShadow.normal,
.navActionButtonNarrowShadow.normal,
.navActionButtonContainerShadow.normal,
#secondTabActionListFlyoutControl .navActionButtonSmallShadow.normal,
.navActionButtonShadow.normal
{
background-image: url('/_imgs/NavBar/TileDropShadow.png');
}

.navActionButtonSmallShadow.normal
{
background-image: url('/_imgs/NavBar/MRUTileDropShadow.png');
}

.navModuleButtonShadow,
.navActionButtonShadow
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 2px;
<% } else { %>
margin-left: 2px;
<% } %>
width: 184px;
}

.navActionButtonNarrowShadow
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 2px;
<% } else { %>
margin-left: 2px;
<% } %>
width: 37px
}

.navActionButtonSmallShadow
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 2px;
<% } else { %>
margin-left: 2px;
<% } %>
width: 123px;
}

.navActionGroupContainer A.navActionButtonContainer.normal,
.navActionGroupContainer A.navModuleButton.normal,
.navActionGroupContainer A.navActionButtonNarrowShadow.normal,
.navActionGroupContainer A.navActionButtonSmall.normal,
.navActionListContainer A.navActionButtonSmall.normal
{
border-bottom: none;
}

#firstTabActionListFlyoutControl .navActionButtonSmallShadow
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 1px;
<% } else { %>
margin-left: 1px;
<% } %>
width: 123px;
}

.navActionButtonSmall
{
width: 123px;
height: 48px;
border: 1px solid #FFFFFF;
}

.navEmptyActionButtonSmall .navActionButtonLabel {
color: #002050;
}

.navEmptyActionButtonSmall
{
height: 50px;
border: 0px;
}

.navEmptyActionButtonSmall .navActionButtonLabel
{
display: inline-block;
}



.navActionButtonIconContainer
{
opacity: 0.6;
filter: alpha(opacity=60);
display: block;
}

.navActionButtonSplitterContainer, .navActionButtonDownImageContainer
{
height: 70px;
display: table-cell;
vertical-align: middle;
}

.navActionButtonSplitterContainer
{
width: 1px;
}

.navActionButtonDownImageContainer
{
width: 28px;
text-align: center;
}

.navActionButton:hover .navActionButtonIconContainer,
.navActionButtonContainer.selected .navActionButtonIconContainer
{
opacity: 1.0;
filter: alpha(opacity=100);
}

.navActionButtonSmall img
{
opacity: 0.25;
filter: alpha(opacity=25);
}

.navActionButtonSmall:hover	img
{
opacity: 0.25;
filter: alpha(opacity=25);
}


.navModuleButton .navActionButtonIconContainer,

.navActionButtonLeft .navActionButtonIconContainer,

.navActionButtonDefault .navActionButtonIconContainer
{
width: 32px;
height: 32px;
margin-top: 8px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
}


.navActionButtonNarrow .navActionButtonIconContainer
{
width: 32px;
height: 32px;
margin: 8px auto;
}

.navActionButtonRight .navActionButtonIconContainer
{
display: table-cell;
vertical-align: middle;
text-align: center;
height: 70px;
width: 29px;
}


.navActionButtonSmall .navActionButtonIconContainer
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 0;
<% } else { %>
right: 0;
<% } %>
bottom: 0;
overflow: hidden;
}



.navActionButtonLabel
{
color: white;
text-decoration: none;
display: block;
font-size: 9.75pt;
margin-left: 10px;
margin-right: 10px;
}


.navModuleButton .navActionButtonLabel
{
margin-top: 4px;
font-size: 15px;
text-transform: uppercase;
}


.navActionButtonLeft .navActionButtonLabel,

.navActionButtonDefault .navActionButtonLabel
{
text-transform: uppercase;
margin-top: 6px;
}


.navActionButtonNarrow .navActionButtonLabel
{
display: none;
}

.navActionButtonSmall .navActionButtonLabel
{
font-size: 14px;
margin-top: 25px;
}


.navActionButton.selected:after
{
content: " ";
display: block;
border-color: #FFFFFF transparent;
border-style: solid;
border-width: 0 10px 10px;
left: 50%;
margin-left: -10px;
position: absolute;
top: 84px;
width: 0;
height: 0;
z-index: 9999;
overflow: visible;
}

.nav-tabBody
{
margin: 0;
padding: 0;
white-space: nowrap;
left: 0;
top: 0;
display: inline-block;
}

.nav-layout, .nav-groupContainer
{
display: inline-block;
}

.nav-subgroup,
.nav-group
{
margin: 0;
padding: 0;
list-style-type: none;
display: inline-block;
vertical-align: top;
}

.nav-groupBody
{
display: block;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}

.nav-groupTitle
{
display: block;
white-space: nowrap;
cursor: default;
color: #002050;
font-size: 9.75pt;
font-weight: 500;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding: 0 2px 7px 0;
<% } else { %>
text-align: left;
padding: 0 0 7px 2px;
<% } %>
height: 16px;
}

.nav-groupTitle,
.navActionButtonLabel,
.navTabButtonLabel
{
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
}

.nav-groupTitle {
line-height: normal;
}

.nav-row
{
display: block;
height: 32px;
margin-bottom: 12px;
}

.nav-rowBody:hover, .nav-rowBody:focus, .nav-rowBody.selected
{
background-color: #87a47c;
}

a.nav-rowBody
{
display: inline-block;
white-space: nowrap;
cursor: default;
height: 32px;
width: 100%;
}

a.nav-rowBody .nav-rowLabel
{
display: inline-block;
vertical-align: middle;
}

.nav-rowLabel
{
color: black;
font-size: 10.5pt;
width: 170px;
}

.nav-scrl-left-lnk,
.nav-scrl-right-lnk
{
position: absolute;
z-index: 10005;
width: 16px;
padding: 0 4px 0 4px;
height: 100%;
}

.nav-scrl-left-lnk {
<% if (CrmStyles.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
}

.leftNavLinkImg,
.leftNavLinkImg img,
.rightNavLinkImg,
.rightNavLinkImg img
{
border: none;
width: 9px;
height: 9px;
position: absolute;
top: 50%;
<% if (CrmStyles.IsRightToLeft) { %>
right: 50%;
margin-right: -4.5px;
<% } else { %>
left: 50%;
margin-left: -4.5px;
<% } %>
margin-top: -4.5px;
}

.nav-scrl-right-lnk {
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
}

.nav-scrl {
position: relative;
background-color: #DFE2E8;
}

.navActionListContainer .nav-scrl {
position: relative;
background-color: #FFFFFF;
}

.nav-scrl-cont {
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 24px;
<% } else { %>
margin-left: 24px;
<% } %>
}

.nav-scrl-view {
overflow: visible;
-ms-touch-action: none;
}

.navActionGroupContainer .nav-scrl-view {
padding: 6px 0 6px 0;
}

.navActionListContainer .nav-scrl-view {
padding: 6px 0 8px 0;
}



div#crmMasthead .navDropDownMenu
{
border: 2px solid #002050;
background-color: #fff;
color: #444;
padding: 0;
font-family: 'Segoe UI', Segoe, Tahoma, Helvetica, Arial, sans-serif;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
top: 40px;
position: absolute;
z-index: 9999;
}

div#crmMasthead .navDropDownMenu a
{

display: block;
color: #444;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 9px 18px 9px 35px;
<% } else { %>
padding: 9px 35px 9px 18px;
<% } %>
text-decoration: none;
text-transform: none;
font-size: 14px;
height: auto;
width: 150px;
}

div#crmMasthead .navDropDownMenu a:hover
{
background-color: #d7ebf9;
}

div#crmMasthead .navDropDownMenuUserInfo
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 58px;
<% } else { %>
right: 58px;
<% } %>
}

div#crmMasthead .navDropDownMenuSettings
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 28px;
<% } else { %>
right: 28px;
<% } %>
}




.navStatusArea
{
position: absolute;
top: 45px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 35px;
<% } else { %>
right: 35px;
<% } %>
font-size: 9pt;
width: 660px;
z-index: 1050;
}

.navStatusBar
{
margin: 0 auto;
color: #333333;
padding: 0;
min-height: 22px;
}

.navStatusBar img { display: block; border: none; }

.navStatusInfo
{
background-color: #FFF19D;
border: 1px solid #DDDDDD;
}

.navStatusError
{
background-color: #FFBABD;
border: 1px solid #FF2122;
}

.navStatusInfo tr
{
vertical-align: middle;
}

.navStatusText
{
display: block;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
max-width: 360px;
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0 6px 0 12px;
<% } else { %>
margin: 0 12px 0 6px;
<% } %>
}

.navStatusIcon
{
display: block;
margin: 0 6px;
}

.navStatusClose
{
display: block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 6px;
<% } else { %>
margin-right: 6px;
<% } %>
}



.navBarOverlay
{
z-index: 997;
width: 100%;
height: 100%;
position: fixed;
background-color: transparent;
background-image: url('/_imgs/NavBar/Invisible.gif');
opacity: 0.0;
display: none;
}