<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>






















#crmMasthead
{
display:inline;
width: 100%;
height: 50px;
background-color: rgb(0, 32, 80);
overflow: hidden;
margin-top: 0px !important;
}

#crmMasthead HiddenNavBar
{
height: 0px;
}

.navigationControl
{
margin: 0;
z-index: 999;
float: left;
width: 100%;
position: relative;
overflow: hidden;
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
line-height: 55px;
max-width: 200px;
}

.navTabButtonRightMargin
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left:4px
<% }
   else
   { %>
    margin-right:4px
<% } %>
}

.tabTextMarginLeft
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:8px !important
<% }
   else
   { %>
    margin-left:8px !important
<% } %>
}

.navTabButtonText
{
display: block;
color:#FFFFFF;
height: 50px;
max-width: 140px;
text-overflow: ellipsis;
overflow: hidden;
}

.navTabButtonAreaText
{
font-size: 20px !important;
margin-top: -4px;
}

.navTabButtonSubAreaText
{
margin-top: -2px;
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

.navTabButtonLeftImageContainer img
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 4px;
<% }
   else
   { %>
    padding-right: 4px;
<% } %>
}

.navActionButtonDownImageContainer img
{
margin: auto;
}

.navTabButton, .navTabCrmLogoOutlook, .navTabSeparator, .navTabButton a, .navTabButton a:visited, .navTabButton a:link, .navTabSeparator a, .navTabSeparator a:visited, .navTabSeparator a:link, .O365Waffle
{
color: white;
border: 0;
background-color: transparent;

font-size: 10.5pt;
height: 50px;
display: inline;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
margin: 0;
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

<% if (Request.Browser.Browser == "IE")
   { %>
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

    .navTabButton.selected .navTabButtonImagePreview, .navTabButton:hover .navTabButtonImagePreview
    {
    border: 1px solid #DFE2E8 !important;
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
<% } %>

.navTabFiller
{
height: 50px;
overflow: hidden;
}


.sandbox, .preview
{
background-color: #E06F07;
}

.sandboxWatermark, .previewWatermark
{
color: #FFFFFF;
font-family: 'Segoe UI Light', 'Segoe UI';
font-weight: lighter;
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
font-size: 44px;
line-height: 44px;
text-align: center;
opacity: 0.6;
}

.navTabQuickCreateSpacer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
display: block;
height: 50px;
width: 100px;
}

.navBarTopLevelItem
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-left: 25px;
    margin-right: 0px;
<% }
   else
   { %>
    float: left;
    margin-right: 25px;
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

.navTabBackButtonDisabled:hover
{
background-color:#002050 !important;
}

.navTabBackButtonDisabled
{
width : 0px;
}
.navTabButton > a
{
padding: 0 10px;
}

.navHomeButton
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 25px;
<% }
   else
   { %>
    margin-right: 25px;
<% } %>
}

.navFloatRight
{
margin: 0;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}

.navTabButtonLeft > a
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 0;
<% }
   else
   { %>
    margin-right: 0;
<% } %>
}

.navTabButtonLeft
{
display: table-cell;
vertical-align: middle;
}

span #TabNode_tab0Tab-main
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 0px;
    margin-right: -10px;
<% }
   else
   { %>
    padding-left: 0px;
    margin-left: -10px;
<% } %>
}

#TabCS-main,#TabSFA-main,#TabMA-main,#TabSettings-main,#TabHLP-main
{
margin: 0px;
}

#TabHomeNode-logo
{
width: 50px;
}

#TabnavTabLogoTextId a
{
display:inline-table !important;
vertical-align:middle;
}

#TabnavTabLogoTextId_divider, #TabHomeNode_divider, #TabButtonHelpId_divider
{
margin-right:0px;
margin-left:0px;
}

#TabnavTabLogoTextId_divider
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left:0px !important;
<% }
   else
   { %>
    margin-right:0px !important;
<% } %>
}


.navTabButtonRight
{
display: table-cell;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left:6px;
<% }
   else
   { %>
    margin-right:6px;
<% } %>
}

.SubAreaNodePadding
{
display: table-cell;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:10px!important;
<% }
   else
   { %>
    padding-right:10px!important;
<% } %>
}
.AreaNodePadding
{
display: table-cell;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 10px!important;
<% }
   else
   { %>
    padding-left: 10px!important;
<% } %>
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 0px !important;
<% }
   else
   { %>
    margin-left: 0px !important;
<% } %>
}

.navTabSplitterSpan,.navTabSplitterSpan:hover,navTabSplitterSpan.selected
{
margin-left: 0px;
margin-right: 0px;
}

.navTabSplitterSpan{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left:0px !important;
<% }
   else
   { %>
    margin-right:0px !important;
<% } %>

}

#TabHomeNode_divider:hover
{
background-color:#002050 !important;
}

.navTabButtonRight > a
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 0;
    padding-right: 0;
<% }
   else
   { %>
    margin-left: 0;
    padding-left: 0;
<% } %>
}

.navBarSearchIcon
{
position: absolute;
z-index: 999;
top: 50px;
width: 220px;
background-color: white;
font-size: 10.5pt;
height: 30px;
display: inline;
float: left;
color: white;
border: 0;
margin: 0;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 324px;
<% }
   else
   { %>
    right: 324px;
<% } %>
box-shadow: 0px 0px 3px -3px rgba(0,0,0,0.5), 4px 4px 3px -3px rgba(0,0,0,0.5), -4px 3px 6px -3px rgba(0,0,0,0.5);
}

.navTabButtonLeftIE8Fix
{
max-width: 150px;
}

.navTabButton:hover ,#TabUserInfoId:hover
{
text-decoration: none;
}

.navTabButton.selected
{
text-decoration: none;
}



#TabHome:hover #homeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -27px -1px;
width: 22px;
height: 14px;
vertical-align: middle;
}

#TabHome.selected:hover #homeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -1px -27px;
width: 22px;
height: 14px;
vertical-align: middle;
}

#TabHome:selected #homeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -1px -27px;
width: 22px;
height: 14px;
vertical-align: middle;
}

<% if (Request.Browser.Browser == "IE")
   { %>
    #TabHome:selected #homeButtonImage
    {
    border-width: 1px;
    border-style: solid;
    }
<% } %>

.logoBgColor.selected
{
background-color: #0072C6 !important;
}

#navBarSettingsId::after
{
font-family: navIconFont;
content: "\e713";
vertical-align: middle;
width: 50px;
margin-top: 0px;
padding: 18px;
}

#navTabButtonHelpImageId::after
{
font-family: navIconFont;
content: "\e897";
vertical-align: middle;
width: 50px;
margin-top: 0px;
padding: 18px;
}

#navTabGlobalCreateImage::after
{
font-family: navIconFont;
content: "\e710";
vertical-align: middle;
width: 50px;
margin-top: 0px;
padding: 18px;
}

.globalMruButtonImage::after
{
font-family: navIconFont;
content: "\e81c";
vertical-align: middle;
width: 50px;
margin-top: 0px;
padding: 18px;
}
#TabAppSwitcherNode > a
{
padding: 0 17px;
}

.AppSwitcherButtonImage
{
background-image:url("/_imgs/NavBar/NavBarAppSwitcher.png");
background-repeat: no-repeat;
width: 16px;
height: 16px;
vertical-align: middle;
}

#advancedFindImage::after
{
font-family: navIconFont;
content: "\e71c";
vertical-align: middle;
width: 50px;
margin-top: 0px;
padding: 18px;
}
.homeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -27px -1px;
width: 22px;
height: 14px;
margin-right: 5px;
margin-left: 5px;
vertical-align: middle;
}

.homeMarginRemover
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: -5px !important;
<% }
   else
   { %>
    margin-right: -5px !important;
<% } %>
}

.tabHomeButtonImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -71px -19px;
width: 16px;
height: 14px;
vertical-align: middle;
margin-top: 1px;
margin-right: 3px;
margin-left: 3px;
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

#navTabLogoImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
background-repeat: no-repeat;
background-position: -1px -43px;
width: 22px;
height: 22px;
padding-right: 0px !important;
padding-left: 0px !important;
vertical-align: middle;
}



.navTabSplitter
{
width: 1px;
height: 50px;
opacity: 0.3;
}

.navTabDivider
{
width: 1px;
height: 50px;
opacity:0.3;
}

.navTabButtonArrowDown
{
border: none;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 6px;
<% }
   else
   { %>
    margin-left: -2px;
<% } %>
margin-top: -2px;
}

.navTabButtonUserInfo
{
padding: 0 0px;
width: 50px;
}

.navTabButtonUserInfo > a
{
padding: 0;
}

.navTabButtonHelp > a
{
padding: 0 0px;
}

.navTabButtonSettings > a
{
padding: 0 0px;
}

.navAdvSearch > a
{
padding: 0 0px;
}
.navTabQuickCreateMargin > a
{
padding: 0 0px;
}
#TabGlobalMruNode > a
{
padding: 0 0px;
}
.navBarSearchButton > a
{
padding: 0 0px;
}

.navBarSearchButton
{
width: 50px;
}

#TabButtonHelpId
{
width: 50px;
}

#TabGlobalMruNode
{
width: 50px;
}
.navTabQuickCreateMargin
{
width: 50px;
}

.navBarSpacing
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left: 4px;
<% } %>
}

.navAdvSearch
{
width: 50px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 12px !important;

<% }
   else
   { %>
    margin-right: 12px !important;
<% } %>
}

.navBarSpacingRemove
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: -8px;
<% }
   else
   { %>
    margin-left: -8px;
<% } %>
}

.navTabButtonModuleSwitcher > a
{
padding-right: 14px;
padding-left: 14px;
}

#TabnavTabLogoTextId.navTabButton > a
{
padding : 0px
}

.navTabThemeButton
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 20px;
    padding-right: 16px;
<% }
   else
   { %>
    padding-left: 16px;
    padding-right: 20px;
<% } %>
display: flex;
flex-direction: row;
align-items: center;
}

.navTabThemeButton > span.navTabButtonImageContainer
{
display: flex;
flex-direction: row;
align-items: center;
}

.navTabThemeButton > a > span >img
{
vertical-align: middle;
}

#TabButtonSettingsId
{
width: 50px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right : 12px;
<% }
   else
   { %>
    margin-left : 12px;
<% } %>
}

.navTabButtonUserInfoText
{
font-size: 12px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding: 0px 0px 0px 10px;
<% }
   else
   { %>
    text-align: left;
    padding: 0px 10px 0px 0px;
<% } %>
display: block;
text-transform: none;
line-height: normal;
max-width: 110px;
overflow: hidden;
text-overflow: ellipsis;
<% if (Request.Browser.Browser == "IE" && System.Web.HttpContext.Current.Request.Browser.MajorVersion == 8)
   { %>
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
width: 32px;
height: 32px;
border-radius: 50px;
border: 1px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px;
<% }
   else
   { %>
    margin-left: 10px;
<% } %>
}

.navCrmLogo
{
display: table-cell;
direction: ltr;
}

.navBarUserInfoAlign
{
vertical-align: middle;
padding-bottom: 10px;
}

.navTabLogoText
{
display: table-cell;
vertical-align: middle;
padding-top: 0px;
text-transform: none;
font-size: 18px;
font-family :Segoe UI;
font-weight: normal;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 13px;
    padding-right: 17.02px;
<% }
   else
   { %>
    padding-left: 17.02px;
    padding-right: 13px;
<% } %>
}

.navTabLogoTextImage
{
display: table-cell;
vertical-align: middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 13px;
    padding-right: 17.02px;
<% }
   else
   { %>
    padding-left: 17.02px;
    padding-right: 13px;
<% } %>
}

.navTabLogoTextThemeImage
{
display: table-cell;
vertical-align: middle;
max-width: 400px;
min-width: 50px;
overflow: hidden;
}

.navTabLogoTextThemeOutlookImage
{
display: table-cell;
vertical-align: middle;
max-width: 440px;
min-width: 50px;
overflow: hidden;
}

.navTabLogoTextImageOutlookPadding
{
padding-left: 20px;
padding-right: 20px;
}

.navTabLogoTextImagePadding
{

}

.logoButtonImage
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

.homeButtonImage
{
margin-top: 1px;
}

.navTabModuleButton
{
text-transform: uppercase;
}

.navTabHidden
{
display: none;
}

.navTabButtonNarrowText
{
max-width: 33px;
}

.navSearchButtonLayout
{
background-color : transparent !important;
height:100% !important;
}

.navSearchButtonHeight
{
height: 28px !important;
background-color : white !important;
}

.navSearchLabelLayout
{
padding : 4px 6px !important;
font-size: 14px !important;
}

.navImageFlipHorizontal::after
{
font-family: navIconFont;
content: "\e721";
vertical-align: middle;
padding:18px;
vertical-align: middle;
}

.navSearchLayout
{
margin-top: 0px;
height:28px !important;
}



.navTabDisableHover.selected, .navTabDisableHover:hover
{
background-color: #6F7B97;
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
top: 50px;
background-color: black;
}

.navActionListContainer
{
top: 148px;
border-top: 0px solid #FFFFFF;
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
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

.globalMruContainer
{
background-image: url('/_imgs/navbar/SiteMapFlyoutDropdown.png');
background-position: bottom;
background-repeat: repeat-x;
}

.globalMruContainer a.nav-rowBody .nav-iconContainer
{
vertical-align: middle;
display: inline-block;
margin-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left: 4px;
<% } %>
}

@media all and (max-height: 620px)
{
.globalMruContainer #nav-shuffle
{
max-height: 250px;
overflow-y: scroll;
overflow-x: hidden;
margin-bottom: 25px;
}
}
@media all and (min-height: 620px)
{
.globalMruContainer #nav-shuffle
{
overflow-x: hidden;
max-height: 530px;
margin-bottom: 25px;
}
}

.globalMruContainer .nav-tabBody
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 11px;
<% }
   else
   { %>
    margin-left: 11px;
<% } %>

margin-bottom: 20px;
}

@media all and (max-width: 660px)
{
.navBarSearchIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 100px;
<% }
   else
   { %>
    right: 100px;
<% } %>
}
}

@media all and (max-width: 796px)
{
.globalMruContainer .nav-group
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
    margin-right: 10px;
<% } %>
display : block;
position: relative;
width : 386px;
margin-top: 13px;
}
}

@media all and (min-width: 796px)
{
.globalMruContainer .nav-group
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
    margin-right: 10px;
<% } %>
display : inline-block;
position: relative;
width : 386px;
margin-top: 13px;
}
}

.globalMruContainer .nav-rowLabel
{
width: 400px;
max-width : 278px;
text-overflow: ellipsis;
}

.globalMruContainer .pinStatusContainer
{
position: absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px;
    left : 30px;
<% }
   else
   { %>
    margin-left: 10px;
    right : 30px;
<% } %>
}

.globalMruContainer .highContrast .pinStatusContainer.unpinned img
{
width: 10px;
height: 7px;
}

.globalMruContainer .nav-subgroup
{
margin-top: 2px;
}

.globalMruContainer .nav-subgroup.nav-separator:not(:first-child):not(:last-child)
{
margin-top : 16px;
margin-bottom : 16px;
height : 1px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left : 4px;
<% } %>

}

.globalMruContainer .pinned img
{
width: 10px;
height: 7px;
padding-left: 6px;
padding-right: 6px;
padding-top: 9px;
padding-bottom: 9px;
}

.globalMruContainer .nav-separator hr
{
display: block;
border-color: 3FE2E8;
border-bottom: 0px;
}

.globalMruContainer .nav-separator:first-child hr, .globalMruContainer .nav-separator:last-child hr
{
display: none;
}

.globalMruContainer .pinStatusContainer img
{
vertical-align: middle;
display: inline-block;
width: 16px;
height: 16px;
}

.globalMruContainer .nav-rowBody:hover .unpinned img, .globalMruContainer .nav-rowBody:focus .unpinned img, .globalMruContainer .unpinned:focus img, .globalMruContainer .unpinned.mru-touch-enabled img
{
background-image: url('/_imgs/navbar/RecordUnpinned.png');
background-repeat: no-repeat;
background-position: center;
margin-top: 15px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
<% }
   else
   { %>
    margin-right : 10px;
<% } %>
}

.globalMruContainer .nav-layout, .nav-groupContainer
{
width: 100%;
}

.globalMruContainer .nav-groupTitle
{
padding-top: 0px;
padding-bottom: 0px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left : 4px;
<% } %>

}



.navActionButtonContainer
{
width: 180px;
height: 70px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 19px;
<% }
   else
   { %>
    margin-right: 19px;
<% } %>
display: inline-block;
}

.navActionGroupContainer .navActionButtonContainer
{
border: 0px solid #DFE2E8;
}

.navActionListControl .navActionButtonContainer
{
border: 2px solid #384f71;
}

.navActionGroupContainer .navActionButtonContainer.selected,
.navActionListControl .navActionButtonContainer.selected
{
border: 0px solid #DFE2E8;
border-radius: 0px;
}

.navActionButton
{
background-color: #555555;
position: relative;
color: white;
width: 180px;
height: 70px;
display: inline-block;
vertical-align: top;
font-family: 'Segoe UI';
font-size: 12px;
text-decoration: none;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
cursor: default;
}

.navActionButton:hover
{
background-image: url('/_imgs/NavBar/Dot030.png');
text-decoration: none;
}

.navActionButton.selected:hover
{
background-image: none !important;
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
height: 15px;
font-size: 15px;
display: block;
}

.navActionButtonSmallShadow.normal
{
background-image: url('/_imgs/NavBar/MRUTileDropShadow.png');
}

.navModuleButtonShadow,
.navActionButtonShadow
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 2px;
<% }
   else
   { %>
    margin-left: 2px;
<% } %>
width: 184px;
}

.navActionButtonNarrowShadow
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 2px;
<% }
   else
   { %>
    margin-left: 2px;
<% } %>
width: 37px
}

.navActionButtonSmallShadow
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 2px;
<% }
   else
   { %>
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 1px;
<% }
   else
   { %>
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

.navActionButton.selected span.navActionButtonIcon img
{
height: 71px;
width: 85px;
position: relative;
margin-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 91px;
<% }
   else
   { %>
    left: 91px;
<% } %>
}

span.navActionButtonIcon img
{
height: 66px;
width: 80px;
position: relative;
margin-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 96px;
<% }
   else
   { %>
    left: 96px;
<% } %>
}



.navActionButtonIconContainer
{
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

.navActionButtonSmall:hover img
{
opacity: 0.25;
filter: alpha(opacity=25);
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0;
<% }
   else
   { %>
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

font-size: 13px;
bottom: 6px;
position: absolute;
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


.nav-section
{
display: inline-block;
vertical-align:top;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 15px;
<% }
   else
   { %>
    padding-right: 15px;
<% } %>
}

.nav-subgroup
{
display:block;
}

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
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
}

.nav-groupTitle
{
display: block;
white-space: nowrap;
cursor: default;
font-weight: 500;
height : 100%;
font-size: 18px;
padding-bottom: 10px;
padding-top: 13px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
<% }
   else
   { %>
    margin-left: 4px;
<% } %>
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

a.nav-rowBody
{
display: inline-block;
white-space: nowrap;
cursor: default;
height: 32px;
height: 40px;
width: 100%;
}

a.nav-rowBody .nav-iconContainer
{
vertical-align: middle;
display: inline-block;
margin-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 10px;
    margin-right: 4px;
<% }
   else
   { %>
    margin-right: 10px;
    margin-left: 4px;
<% } %>
margin-bottom: 4px;
}

.nav-img-cont-float
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% } %>
<%
   else
   { %>
    text-align: left;
<% } %>
overflow: hidden;
margin-right: auto;
margin-left: auto;
position: relative;
z-index: 10;
}

.nav-img-32by32 {
width: 32px;
height: 32px;
}

.nav-img-32by32 img {
width: 32px !important;
height: 32px !important;
}

.nav-img-cont-float img {
position: absolute;
z-index: 5;
border: none;
}

.nav-groupTitle, .nav-rowLabel {
line-height: normal;
}

.nav-groupTitle, .nav-rowLabel, .navActionButtonLabel, .navTabButtonLabel
{
text-overflow: ellipsis;
overflow: hidden;
max-width: 180px;
white-space: nowrap;
}

.navigationControl blockquote, body, div, span
{
border: 0;
margin: 0;
padding: 0;
}

.navActionButton.selected
{
height : 85px;
}

.navModuleButtonShadow.selected
{
display: none;
}

.navActionButtonDefault .navActionButtonIconContainer
{
width: 67px;
height: 67px;
margin-top: 15px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 15px;
<% }
   else
   { %>
    margin-left: 15px;
<% } %>
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

.mainTab-nav-scrl
{
position: relative;
}

.nav-groupTitle[title=""]
{
height: 13px;
padding-bottom: 0px;
padding-top: 0px;
}

span.nav-section > .nav-subgroup:last-child
{
padding-bottom: 20px;
}

.navActionButtonNarrow span.navActionButtonIcon img
{
height: 32px;
width: 32px;
margin-top: 0px;
margin-bottom: 0px;
position: static;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}

.navActionButtonNarrow .navActionButtonIconContainer
{
opacity : 0.6;
}

a.nav-rowBody .nav-rowLabel
{
display: inline-block;
vertical-align: middle;
}

.nav-rowLabel
{
width: 138px;
padding-bottom:7px;
font-size: 13px;
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 0px;
<% }
   else
   { %>
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 50%;
    margin-right: -4.5px;
<% }
   else
   { %>
    left: 50%;
    margin-left: -4.5px;
<% } %>
margin-top: -4.5px;
}

.nav-scrl-right-lnk
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}

.nav-scrl
{
position: relative;
background-image: url('/_imgs/navbar/SiteMapFlyoutDropdown.png');
background-position: bottom;
background-repeat:repeat-x;
}

.navActionListContainer .nav-scrl
{
position: relative;
background-color: #FFFFFF;
}

.nav-scrl-cont
{
overflow: hidden;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 25px;
<% }
   else
   { %>
    margin-left: 25px;
<% } %>
}

.nav-scrl-view
{
overflow: visible;
-ms-touch-action: none;
}

.navActionListContainer .nav-scrl-view
{
padding: 0px 0 8px 0;
}



div#crmMasthead .navDropDownMenu
{
box-shadow: 0px 0px 3px -3px rgba(0,0,0,0.5), 4px 4px 3px -3px rgba(0,0,0,0.5), -4px 3px 6px -3px rgba(0,0,0,0.5);

background-color: #fff;
color: #000000;
padding: 0;
font-family: 'Segoe UI', Segoe, Tahoma, Helvetica, Arial, sans-serif;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>
top: 50px;
position: absolute;
z-index: 9999;
}

.navHorizontalDivider
{
margin: 0px !important;
color: #eaeaea;
}

div#crmMasthead .navDropDownMenu a
{

display: block;
color: #000000;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 9px 18px 9px 35px;
<% }
   else
   { %>
    padding: 9px 35px 9px 18px;
<% } %>
text-decoration: none;
text-transform: none;
font-size: 14px;
height: auto;
width: 165px;
overflow-x: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

div#crmMasthead .navDropDownMenuUserInfo
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 1px;
<% }
   else
   { %>
    right: 1px;
<% } %>
}

div#crmMasthead .navDropDownMenuSettings
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 99px;
<% }
   else
   { %>
    right: 99px;
<% } %>
}




.navStatusArea
{
position: absolute;
top: 45px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 35px;
<% }
   else
   { %>
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin: 0 6px 0 12px;
<% }
   else
   { %>
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 6px;
<% }
   else
   { %>
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

.navBarSearchTextBox
{
padding-right: 4px !important;
padding-left: 4px !important;
font-size: 14px !important;
}

.navBarSearchTextBox::-ms-clear
{
display:none;
}

.searchIconOnly
{
text-decoration: none;
background-image: url('/_imgs/Search_White_16.png');
background-position:center center;
background-repeat: no-repeat;
}

.searchIconOnly:hover
{
text-decoration: none;
background-image: url('/_imgs/Search_White_16.png');
background-position:center center;
background-repeat: no-repeat;
background-color: none !important;
}

a.ms-crm-FindButton
{
width: 32px;
}

.navTabButton.selected #navTabLogoImage ,.navTabButton.selected:hover #navTabLogoImage
{
background-position: -27px -17px;
}

.navTabButton:hover #navTabLogoImage
{
background-image:url("/_imgs/imagestrips/navbar_header.png");
}

.searchIconOnly.Selected ,.searchIconOnly.Selected:hover
{
background-image: url('/_imgs/Search_Hover_16.png');
}

@font-face {
font-family: navIconFont;
src: url('/_imgs/D365Shell.woff2') format('woff2'),
url('/_imgs/D365Shell.woff') format('woff'),
url('/_imgs/D365Shell.ttf') format('truetype'),
url('/_imgs/D365Shell.eot'),
url('/_imgs/D365Shell.svg#svgFontName') format('svg');
}

.navTabButtonArrowDown::after{
font-family: navIconFont;
content: "\e972";
font-size:11px;
margin-left:7px;
border:none;
}
.navTabButtonArrowRight::after{
font-family: navIconFont;
font-size:11px;
vertical-align:middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    content: "\e973";
    margin-right:6px;
<% }
   else
   { %>
    content: "\e974";
    margin-left:6px;
<% } %>
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


@media all and (max-width: 661px)
{
.navBarSearchIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 100px;
<% }
   else
   { %>
    right: 100px;
<% } %>
}
}

@media (min-width: 769px) and (max-width: 793px)
{
.navBarSearchIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 213px;
<% }
   else
   { %>
    right: 213px;
<% } %>
}
}

@media (min-width: 734px) and (max-width: 768px)
{
.navBarSearchIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 262px;
<% }
   else
   { %>
    right: 262px;
<% } %>
}
}

@media (min-width: 703px) and (max-width: 731px)
{
.navBarSearchIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 213px;
<% }
   else
   { %>
    right: 213px;
<% } %>
}
}

@media (min-width: 662px) and (max-width: 702px)
{
.navBarSearchIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 163px;
<% }
   else
   { %>
    right: 163px;
<% } %>
}
}

@media (min-width: 770px) and (max-width: 793px)
{
.navDropDownMenuSettings
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 49px;
<% }
   else
   { %>
    right: 49px;
<% } %>
}
}

@media (min-width: 704px) and (max-width: 730px)
{
.navDropDownMenuSettings
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 49px;
<% }
   else
   { %>
    right: 49px;
<% } %>
}
}

@media (min-width: 663px) and (max-width: 702px)
{
.navDropDownMenuSettings
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
<% }
   else
   { %>
    right: 0px;
<% } %>
}
}


.navTabButtonLeft:hover + span.navTabButtonRight{
background-color:#333333;
}
.navTabButtonRight.selected
{
background-color:#333333!important;
}
.selectedText
{
background-color:#333333;
}
.hoveredText
{
background-color:#333333;
}

@font-face {
font-family: customTextFont;
src: url('/_imgs/seguisb.woff2') format('woff2'),
url('/_imgs/seguisb.woff') format('woff'),
url('/_imgs/seguisb.ttf') format('truetype');
}
span.navTabButtonAreaText
{
font-family: customTextFont;
}
.AreaNodePadding + span.navTabButtonRight
{
margin-right:0px!important;
}
.navTabButtonRight .navTabButtonLink {
margin-right: 6px!important;
padding: 0px;
}