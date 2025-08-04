<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.HeaderClass
{
margin:16px 16px 0 6px;
}

.PrimaryContentClass
{
margin-left: 16px;
margin-right: 16px;
}

.prContentClass
{
margin-left: 6px;
margin-right: 6px;
}

.prDescClass
{
margin-left: 6px;
margin-right: 6px;
}

.scContentClass
{
margin-top: 16px;
position: relative;
top: -36px;
font-size: 13px;
<%if (CrmStyles.IsRightToLeft)
{%>
margin-left: 16px;
margin-right: 11px;
<%}
else
{%>
margin-left: 11px;
margin-right: 16px;
<%}%>
}

.SecondaryContentClass
{
border: 1px solid #DDDDDD;
display: table;
width: 75%;
margin-left: 16px;
margin-right: 16px;
}

.SubContainerClass
{
border: 1px solid #DDDDDD;
display: table;
margin-left: 16px;
margin-right: 16px;
}

.contentContainerClass
{
width: 60%;
height: 90%;
margin-left: 16px;
margin-right: 16px;
margin-top: 16px;
margin-bottom: 16px;
}

.actionhubcontrolcontainer
{
white-space: nowrap;
font-family: "Segoe UI" , "Segoe" , Tahoma, Helvetica, Arial, sans-serif;
}

.actionhubcontrolcontainer .actionhubcontrol
{
max-width: 380px;
min-width: 280px;
position: relative;
padding: 0 6px;
clear: both;
}

.formwallcardview  .actionhubcontrol{
padding: 0;
}

.carouselcardview .LetGetStartedParent {
padding:0;
}

IFRAME#iFrmActionCards
{
height: 342px;
}

.scDescClass
{
margin-left: 16px;
margin-right: 16px;
}

.ActionsClass
{
margin-left: 16px;
margin-right: 16px;
}

.titleTextClass
{
clear: both;
font-size: 12px;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
text-align: right;
<%}
else
{%>
float: left;
text-align: left;
<%}%>
}

.dotLineClass
{
border-bottom: 1px dashed #666666;
width: 100%;
margin: 10px 0px;
position: relative;
top: -28px;
}

.pullLeftClass
{
<%if (CrmStyles.IsRightToLeft)
{%>
float:right;
<%}
else
{%>
float:left;
<%}%>
}

.pullRightClass
{
<%if (CrmStyles.IsRightToLeft)
{%>
float:left;
<%}
else
{%>
float:right;
<%}%>
}

.controlBgClass
{
width:100%;
}

.PhotoImageClass
{
<%if (CrmStyles.IsRightToLeft)
{%>
margin-right: 10px;
<%}
else
{%>
margin-left: 10px;
<%}%>
}

.primaryInfoClass
{
font-size:16px;
position: relative;
top: -38px;
<%if (CrmStyles.IsRightToLeft)
{%>
right: 36px;
<%}
else
{%>
left: 36px;
<%}%>
}

.titleClass
{
color:#cdcdcd;
}

.action-card
{
border: 1px solid #DDDDDD;
margin-top: 15px;
max-width: 500px;
cursor: pointer;
}

.actionHubControlWall .filters .filter
{
display: inline-block;
padding: 0 6px;

}

.actionHubControlWall .filters .filter a
{
color: #666666;
}

.actionHubControlWall .filters .filter.selected a
{
color: #000000;
font-weight: 600;
}

.action-card-title
{
font-size: 14px;
font-weight: 600;
color: #444;
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
margin: 11px 14px 0 3px;
cursor: pointer;
word-wrap: normal;
max-width:300px;
}

.action-card-user
{
display:table;
table-layout: fixed;
margin-bottom: 10px;
margin-top: 18px;
cursor: pointer;
}

.action-card-user-cell-one
{
cursor: pointer;
}

.action-card-user-cell-img
{
width:16px;
border-radius:50%;
}

.action-card-user-cell-two
{
display:table-cell;
width:390px;
cursor: pointer;
}

.action-card-user-cell-two strong
{
font-size: 12px;
font-weight: 600;
color: #444;
cursor: pointer;
vertical-align: top;
}

.action-card-user-cell-three
{
font-size: 10px;
font-weight: 400;
color: #BBBBBB;
<% if (CrmStyles.IsRightToLeft)
{ %>
float: left;
<%}
else
{%>
float: right;
<%}%>
margin-top:2px;
}

.card-container, .action-card-headerbar, .actionhubSection
{
cursor: pointer;
}

.action-card-button-seperator
{
border-top: 1px solid #DDDDDD;
cursor: pointer;
}

.action-card-content
{
font-size: 12px;
font-weight: 400;
color: #444;
padding-bottom: 10px;
cursor: pointer;
<%if (CrmStyles.IsRightToLeft)
{%>
margin-right: 4px;
<%}
else
{%>
margin-left: 4px;
<%}%>

}
.action-card-button-container
{
padding-bottom: 0px;
padding: 15px 0px 15px 0px;
cursor: pointer;
}

.action-card-button-container a
{
<%if (CrmStyles.IsRightToLeft)
{%>
padding-right: 15px;
<%}
else
{%>
padding-left: 15px;
<%}%>
color: #1160B7;
font-size: 11px;
font-weight: 400;
cursor: pointer;
}

.icon-section
{
min-height: 100%;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
<%}
else
{%>
float: left;
<%}%>
padding-left: 15px;
padding-top: 9px;
padding-right: 15px;
cursor: pointer;
}

.no-record
{
width: 100px;
margin-bottom: 8px;
margin:auto;
}

.no-action-message
{
width: 100%;
text-align: center;
}

.error-message-container
{
text-align: center;
}

.close-icon
{
cursor: pointer;
margin-top: 10px;
<% if (CrmStyles.IsRightToLeft)
{%>
float: left;
padding-left: 27px;
<%}
else
{%>
float: right;
padding-right: 27px;
<%}%>
}

.show-less-delve
{
background: transparent url(/_imgs/imagestrips/activitieswall_images.png?ver=516894692) no-repeat scroll -19px -26px;
width: 16px;
overflow: hidden;
cursor: pointer;
position: absolute;
margin-top: -26px;
line-height: 16px;
overflow-x: hidden;
white-space: normal;
word-wrap: break-word;
}

.show-more-delve
{
background: transparent url(/_imgs/imagestrips/activitieswall_images.png?ver=516894692) no-repeat scroll -37px -26px;
width:16px;
overflow: hidden;
cursor: pointer;
position: absolute;
margin-top: -26px;
white-space: nowrap;
width:100%;
word-wrap: normal;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
}

.line-clamp
{
line-height: 17px;
overflow: hidden;
position: relative;
}

.icon-seperator
{
width: 5px;
height: 50px;
float: right;
background-color: #0071C5;
margin-top: -4px;
}

.top-align
{
vertical-align: top;
cursor: pointer;
}

#filterContainer
{
max-width: 400px;
}

.delveactionpreview
{
display: inline-block;
margin-left: 10px;
font-style: italic;
font-weight: 400;
color: #777777;
font-family: Segoe\000020UI;
font-size: 12px;
<% if (CrmStyles.IsRightToLeft)
{%>
margin-right: 10px;
<%}
else
{ %>
margin-left: 10px;
<%}%>
}

.filterAndRefreshContainer
{
<%if (CrmStyles.IsRightToLeft)
{%>
text-align: left;
<%}
else
{%>
text-align: right;
<%}%>
cursor: pointer;
margin-bottom: 0px;
max-width: 500px;
}

.actionHubControlWall
{
<% if (CrmStyles.IsRightToLeft)
{%>
margin-right: 23px;;
<%}
else
{%>
margin-left: 23px;
<%}%>
}

#content_notescontrol .actionHubControlWall
{
<%if (CrmStyles.IsRightToLeft)
{%>
margin-right: 0px !important;
<%}
else
{ %>
margin-left: 0px !important;
<%}%>
}

#header
{
padding-top: 15px !important;
}

.loadingImage
{
position:absolute;
<% if (CrmStyles.IsRightToLeft)
{%>
margin-right: 150px;
<%}
else
{%>
margin-left: 150px;
<%}%>
top: 10%;
width: 30%;
}

#content_notescontrol #imgRefreshWall
{
<%if(CrmStyles.IsRightToLeft)
{%>
padding-left: 13px;
<%}
else
{%>
padding-right: 13px;
<%}%>
}

.stage-body #actionHubControlWall #imgRefreshWall
{
display:none;
}

.close-icon img
{
clip: rect(0px 18px 18px 0px);
position: absolute;
}

.truncated-content
{
display:block;
}

.full-content
{
display:none;
}

.show-more-less
{
<%if (CrmStyles.IsRightToLeft)
{%>
float:left;
<%}
else
{%>
float:right;
<%}%>
}

.close-icon img:hover
{
clip: rect(16px 54px 96px -16px);
margin-top: -16px;
position: absolute;
}

.titleContainer
{
display:inline-block;
margin:0 12px ;
}

.actionTaskContainer
{
clear:both;
padding:4px 12px 12px;
color:#0072c6;
background:#f7efef;
}

.titleBarContainer
{
padding:12px 12px 14px 12px;
height:28px;
}

.clearfix
{
clear:both;
}

.generalCard
{
width: 100%;
min-height: 70px;
position: relative;
margin-bottom: 8px;
background-color: white;
cursor: pointer;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
<%}
else
{%>
float: left;
<%}%>
}

.generalCard-medium
{
border: 1px solid #dddddd;
}

.generalCard-contentcontainer
{
width: 100%;
}

.generalCard-leftblock
{
width: 24px;
height: 24px;
overflow: hidden;
clear:both;
padding-top: 8px;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
<%}
else
{%>
float: left;
<%}%>
}

.generalCard-softTitle
{
color: #000000;
line-height: 1.5;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
<%}
else
{%>
float: left;
<%}%>
text-overflow: ellipsis;
overflow: hidden;
width: 100%;
}

.generic-PrimTitle
{
text-overflow: ellipsis;
overflow: hidden;
max-width: 100%;
float: left;
}

.generic-PrimTitle a
{
color: #0072C6;
line-height: 1.5;
font-weight: 600;
}

.Display-Title
{
display: inline;
width:100%;
}

.generalCard-footer
{
clear: both;
background-color: #F5F5F5;
height: 32px;
}

.group-attendeeicon
{
display: inline;
}

.wallcardview .actionCardLayout
{
width: 100%;
}

.snoozeCard
{
width: 16px;
height: 16px;
cursor: pointer;
}

.closeCard
{
width: 16px;
height: 16px;
cursor: pointer;
}

.cardTitle
{
width: 84%;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
text-align: right;
<%}
else
{%>
float: left;
text-align: left;
<%}%>
}

.cardTitleDisplay
{
display: inline-block;
margin-top: 10px;
margin-bottom: 18px;
width: 100%;
<%if (CrmStyles.IsRightToLeft)
{%>
float:right;
<%}
else
{%>
float:left;
<%}%>
}

.cardDescription
{
display: inline-block;
clear: both;
width: 94%;
margin: 14px 12px 8px 12px;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
<%}
else
{%>
float: left;
<%}%>
}

.actionItemsClass
{
position: inherit;
top: -28px;
font-size: 15px;
}

.generalCard-footer-text a
{
color: #0072C6;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
}

.Prim-Text-Info
{
font-size: 12px!important;
line-height:1.2!important;
max-width: 350px!important;
height:44px!important;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
word-wrap: break-word;
position:relative;
background: #ffffff;
max-height: 3.8em;
font-weight: 200;
<%if (CrmStyles.IsRightToLeft)
{%>
margin-left: -.5em;
padding-left: .5em;
<%}
else
{%>
margin-right: -.5em;
padding-right: .5em;
<%}%>
}
.Prim-Text-Info a
{
font-weight: 600;
color: #0072C6;
}
.swipe-medium-data
{
width:100%;
height:100%;
<%if (CrmStyles.IsRightToLeft)
{%>
float:right;
<%}
else
{%>
float:left;
<%}%>
}

.swipe-medium-data:hover
{
box-shadow: 1px 1px 7px #999999;
}

.Display-Title-Container
{
padding:12px 12px 0px 12px;
}

.startUpCardIconTips
{
width : 100px;
height: 100px;
margin-right: 20px;
}

.startUpCardLayout
{
background-color:#F5F5F5;
position: relative;
width: inherit;
height: 132px;
}

.startUpCardActionContainer
{
text-align:center;
width:100%;
}

.startUpCardDescription
{
display: inline-block;
clear: both;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
margin: 0px 12px 8px 12px;
<%}
else
{%>
float: left;
margin: 0px 12px 8px 12px;
<%}%>
}

.startUpCardDescriptionText
{
margin:10px 0;
font-size: 12px;
color :#444444;
line-height:1.2;
display: -webkit-box;
white-space: normal;
<%if (CrmStyles.IsRightToLeft)
{%>
text-align: right;
<%}
else
{%>
text-align: left;
<%}%>
}

.startUpCardButtonContainer
{
margin-bottom:10px;
<%if (CrmStyles.IsRightToLeft)
{%>
float:right;
<%}
else
{%>
float:left;
<%}%>
}

.startUpCardButton
{
font-size: 15px;
color:#0072c6;
border: 1px solid #0072c6;
background: none;
height: auto!important;
width: auto!important;
padding: 5px 10px;
}

.startUpCardButton:hover
{
background-color: #E5F2FF;
}

.startupCardDescriptionContainer
{
width: 180px;
}

.letsGetStartedClass .generalCard
{
border:0;
width: 100% !important;
}

.startUpCardTitleText
{
font-size: 18px;
color :#444444;
line-height:1.2;
width:100%;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
margin:10px 0;
<%if (CrmStyles.IsRightToLeft)
{%>
text-align: right;
<%}
else
{%>
text-align: left;
<%}%>
}

.startUpCardInnerLayout
{
width:300px;
height:100px;
top: 0px;
bottom: 0;
left: 0;
right: 0;
position: absolute;
margin: auto;
}

.wallcardview .startUpCardInnerLayout
{
margin: auto 0;
}

.highcontrast
{
background-color:#000;
}

.carouselcardview .generalCard
{
margin-bottom: 0;
}

.carouselcardview .actionCardLayout
{
height: 132px !important;
}

.carouselcardview
{
background-color:#F5F5F5;
padding:12px 6px;
margin-bottom: 10px;
height:132px;
min-height: 100%;
overflow: hidden;
width: 100%;
}

.letsGetStartedClass .swipe-medium-data:hover
{
box-shadow: none;
}

.carouselcardview .letsGetStartedClass.controlBgClass
{
background-color:#F5F5F5;
}

.wallcardview .letsGetStartedClass.controlBgClass
{
width:100%;
max-width:100%;
}

.wallcardview .actionCardLayout.controlBgClass
{
min-width: 280px;
max-width: 380px;
}

.carouselcardview .actionhubcontrol
{
position:relative;
animation-name: slidecards;
animation-iteration-count: 1;
animation-timing-function: ease-in-out;
animation-duration: 3s;
}

.wallcardview .letsGetStartedClass .startUpCardLayout
{
background-color:#fff;
}

@keyframes slidecards
{
<%if (CrmStyles.IsRightToLeft)
{%>
0%	{
right:100%;
}
100%
{
right:20px;
}
<%}
else
{%>
0%	{
left:100%;
}
100%
{
left:20px;
}
<%}%>
}

.generalCardAction
{
max-width: 40%;
padding: 8px 12px;
overflow: hidden;
text-overflow: ellipsis;
white-space: -moz-pre-space;
word-wrap: break-word;
word-break: break-all;
height: 14px;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
text-align: right;
<%}
else
{%>
float: left;
text-align: left;
<%}%>
}

.generalCardAction:hover
{
border-bottom:2px solid #0072c6;
padding:8px 12px;
}

.generalCardAction:focus
{
border-top:1px solid #0072c6;
border-left:1px solid #0072c6;
border-right:1px solid #0072c6;
border-bottom:2px solid #0072c6;
padding:8px 12px 7px;
}

.cardTypeHeader
{
font-size:12px;
color:#000;
line-height:1.2;
<%if (CrmStyles.IsRightToLeft)
{%>
text-align: right;
<%}
else
{%>
text-align: left;
<%}%>
text-transform: none;
font-weight:bold;
display:inline;
}

.Prim-Text-Info:before
{
position: absolute;
bottom: 0;
content:'\2026';
background: #ffffff;
<%if (CrmStyles.IsRightToLeft)
{%>
left: 1px;
float: left;
<%}
else
{%>
right: 1px;
float: right;
<%}%>
}

.Prim-Text-Info:after
{
content: "";
z-index: 1;
position: absolute;
background: #ffffff;
height: 50px;
width: 100%;
margin-top: 1px;
}

.carouselcardview  .LetGetStartedParent
{
width:100% !important;
max-width: inherit;
margin-right:0;
}

.carouselcardheader
{
margin-bottom:10px;
}

.feedBackActionCard
{
<%if (CrmStyles.IsRightToLeft)
{%>
float : right;
padding-right:10px;
<%}
else
{%>
float : left;
padding-left:10px;
<%}%>
}

.settingActionCard
{
<%if (CrmStyles.IsRightToLeft)
{%>
float : right;
padding-right:10px;
<%}
else
{%>
float : left;
padding-left:10px;
<%}%>
}
.feedbackSetting
{
<%if (CrmStyles.IsRightToLeft)
{%>
float : left;
<%}
else
{%>
float : right;
<%}%>
}
.feedbackCustomizationImage
{
height: 16px;
width: 16px;
vertical-align: middle;
}

.feedbackCustomizationImage:hover
{
cursor: pointer;
}

@media only screen and (min-width:200px) and (max-width:614px) {
.carouselcardview .actionhubcontrol
{
width: 90%;
}
}

@media only screen and (min-width:615px) and (max-width:912px) {
.carouselcardview .actionhubcontrol
{
width: 47.5%;
}
.carouselcardview .cardTitle
{
width: 83%;
}
}

@media only screen and (min-width:913px) and (max-width:1216px) {
.carouselcardview .actionhubcontrol
{
width: 32%;
}
}

@media only screen and (min-width:1217px) and (max-width:1536px) {
.carouselcardview .actionhubcontrol
{
width: 24%;
}
}

.wallcardview .cardTitle
{
width: 87%;
}


@media screen and (min-color-index:0)
and(-webkit-min-device-pixel-ratio:0) { @media
{
.generic-PrimTitle{
height:30px;
}
}}

.wallcardheader .cardTypeHeader
{
<%if (CrmStyles.IsRightToLeft)
{%>
margin-right:18px;
float:right;
<%}
else
{%>
margin-left:18px;
float:left;
<%}%>
}

.wallcardview
{
<%if (CrmStyles.IsRightToLeft)
{%>
margin-right:10px;
clear:both;
<%}
else
{%>
margin-left:10px;
clear:both;
<%}%>
}

.wallcardheader,.formwallcardheader{
margin-bottom:10px;
overflow: auto;
}

.formwallcardheader{
max-width: 382px;
}

.wallcardheader{
max-width: 395px;
}

.snoozeCardIcon
{
<%if (CrmStyles.IsRightToLeft)
{%>
margin: 0 0 0 12px;
<%}
else
{%>
margin: 0 12px 0 0;
<%}%>
}
.emptyCardMessage
{
font-size: 11px;
text-align: center;
position: relative;
bottom: 10px;
line-height: 1.2;
color:#444444;
}

.emptyCardMessageHeader
{
font-size: 14px;
text-align: center;
position: relative;
bottom: 10px;
line-height: 1.8;
color:#444444;
margin-top:7px;
}

.refreshActionCard
{
margin-top:2px;
<%if (CrmStyles.IsRightToLeft)
{%>
float: right;
padding-right: 10px;
<%}
else
{%>
float: left;
padding-left: 10px;
<%}%>
}

.actionCardTitles{
width: 69%;
clear: both;
float: left;
position: absolute;
font-size: 12px;
<%if (CrmStyles.IsRightToLeft)
{%>
margin-right: 36px;
padding-left: 12px;
<%}
else
{%>
margin-left: 36px;
padding-right: 12px;
<%}%>
}
.carouselcardview .actionCardTitles
{
width: 63%;
}