<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>





.touchDateTimeControl
{
width: 310px;

font: normal normal normal 14px 'Segoe UI';
color: #666666;
background-color: #FFFFFF;

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}

.activeTouchControl,
.activeDateTimeControl
{
background-color: #f8ecdf;
}

div.dateTimeControlHeader
{
line-height: 14px;
height: 32px;
}

div.dateTimeControlHeader span.controlLabel
{
display: block;
padding: 9px 0px;
float: left;
text-align: left;
width:150px;
}

div.dateTimeControlHeader span.controlValue
{
display: block;
padding: 9px 0px;
float: left;
text-align: left;
width: 160px;
}

div.dateTimeEditablePanel
{
width: 310px;
}

.scroller
{
margin-bottom: 7px;
overflow: hidden;
display: inline-block;
}

.scrollerComponent
{
float: left;
margin-left: 7px;
}

.scrollerItemMainLabel
{
display: block;
padding-left: 5px;
padding-top: 25px;

font-family: 'SegoeUI-SemiBold', 'Segoe UI SemiBold';
font-size: 36px;
line-height: 36px;

color: #4b4b4b;
}

.currentScrollerItem .scrollerItemMainLabel
{
color: white;
}

.scrollerItemSmallLabel
{
display: block;
padding-left: 5px;
padding-top: 7px;
padding-bottom: 7px;

font-family: 'Segoe UI';
font-weight: bold;
font-size: 12px;
line-height: 12px;

color: #737373;
}

.currentScrollerItem .scrollerItemSmallLabel
{
color: #b4b6b3;
}

.yearWithEra .scrollerItemSmallLabel
{
margin-top: -55px;
}

.scrollerItem
{
height: 87px;
width: 87px;
margin-bottom: 1px;

background-color: #d7d5d8;
}

.currentScrollerItem
{
border: none;
background-color: #4b4d4a;
}

.popup
{
tabindex : -1;
outline: 0px;

position: absolute;
top: 0px;
bottom: 0px;
}

.scrollerPopup
{
overflow-x: hidden;
overflow-y: scroll;
-ms-overflow-style: none;
}

.scrollerButton
{
margin: 9px 0 0;
padding: 0;
font: normal normal normal 14.66px 'Segoe UI';
background: none;
color: black;
border: none;
text-decoration: underline;
display: block;
}





.touchLookupControl
{
width: 310px;

font: normal normal normal 14px / 20px 'Segoe UI';
color: #666666;
background-color: #FFFFFF;

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}

.touchLookupControl .controlHeader
{
line-height: 14px;
height: 32px;
}

.touchLookupControl .controlDisplay
{
padding: 9px 0px;
float: left;
text-align: left;


overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.touchLookupControl .editablePanel
{
width: 310px;
margin-bottom: 7px;
}

.touchLookupControl .lookupPanel .comboBox,
.touchLookupControl .lookupPanel .textbox
{
width: 310px;
height: 33px;

border: 1px solid #8f8f8f;

font: normal normal normal 14px / 20px 'Segoe UI';
vertical-align: text-bottom;
}

.touchLookupControl .lookupPanel .comboBox
{
margin-bottom: 5px;
}

.touchLookupControl .lookupPanel .textbox
{
width: 308px;
}

.touchLookupControl .partyList
{
display: block;
}

.touchLookupControl .partyList .partyListItem
{
display: block;

padding-left: 1px;

color: #333333;
background-color: transparent;
}

.touchLookupControl .partyList .partyListItemLabel
{
display: inline-block;
}

.touchLookupControl .partyList .partyListItemDelete
{
display: inline-block;
height: 20px;
}

.symbolFont
{
font-family:'Segoe UI Symbol';
}

.Clear-symbol:before
{
content: '\E0D9';
}





.touchLookupMatchesBar
{
display: none;

position: absolute;
bottom: 0px;

width: 100%;
height: 84px;

background: #383838;
color: #ffffff;
font: normal normal normal 14px / 20px 'Segoe UI';

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}

.touchLookupMatchesBar .noMatchesFoundMessage,
.touchLookupMatchesBar .refineQueryMessage
{
display: none;
margin: 0px 0px 0px 40px;
}

.touchLookupMatchesBar .listItem
{
cursor: default;
display: inline;
white-space: nowrap;
margin: 0px 0px 0px 40px;
}

.touchLookupMatchesBar .listRoot
{
width: ~'-moz-calc(100% - 100px)';
}

.touchLookupMatchesBar .listRoot
{
width: ~'-webkit-calc(100% - 100px)';
}

.touchLookupMatchesBar .listRoot
{
display: inline-block;
height: 100%;
width: ~'calc(100% - 100px)';
}

.touchLookupMatchesBar .scrollRegion
{
position: absolute;
left: 0px;
right: 0px;
}

.touchLookupMatchesBar .touchLookupScrollingElement
{
height: ~'-moz-calc(100% - 20px)';
}

.touchLookupMatchesBar .touchLookupScrollingElement
{
height: ~'-webkit-calc(100% - 20px)';
}

.touchLookupMatchesBar .touchLookupScrollingElement
{
padding-top: 20px;
height: ~'calc(100% - 20px)';
}

.touchLookupSimpleListView
{
height: 100%;
width: auto;
min-width: 320px;
overflow-y: hidden;
-ms-overflow-style: none;
}




.indeterminateProgressBar
{
padding-top: 6px;
height: 4px;
padding-bottom: 8px;
width: 100%;
position: relative;
overflow: hidden;
}

.touchLookupMatchesBar .indeterminateProgressBar
{
position: absolute;
top: 0;
left: 0;
}

.indeterminateProgressBar .progressDot
{
position: absolute;
width: 100%;
font-size: 4px;
line-height: 4px;
display: block;
opacity: 0.0;
-webkit-animation-name: moveProgressDot;
animation-name: moveProgressDot;
-webkit-animation-play-state: running;
animation-play-state: running;
-webkit-animation-duration: 4s;
animation-duration: 4s;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
}

.indeterminateProgressBar .progressDot div
{
width: 4px;
height: 4px;
border-radius: 50%;
background-color: #429bbd;
display: block;
}

.indeterminateProgressBar.hideProgressBar
{
display: none;
}

.indeterminateProgressBar.hideProgressBar .progressDot
{
-webkit-animation-play-state: paused;
animation-play-state: paused;
}

.indeterminateProgressBar .progressDot1
{
-webkit-animation-delay: 0s;
animation-delay: 0s;
}

.indeterminateProgressBar .progressDot2
{
-webkit-animation-delay: 0.2s;
animation-delay: 0.2s;
}

.indeterminateProgressBar .progressDot3
{
-webkit-animation-delay: 0.4s;
animation-delay: 0.4s;
}

.indeterminateProgressBar .progressDot4
{
-webkit-animation-delay: 0.6s;
animation-delay: 0.6s;
}

.indeterminateProgressBar .progressDot5
{
-webkit-animation-delay: 0.8s;
animation-delay: 0.8s;
}

.indeterminateProgressBarDotKeyframeSteps 0%
{
opacity: 1.0;
-webkit-transform: translatex(-10px);
transform: translatex(-10px);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}

.indeterminateProgressBarDotKeyframeSteps 12.5%
{
opacity: 1.0;
-webkit-transform: translatex(33%);
transform: translatex(33%);
-webkit-animation-timing-function: linear;
animation-timing-function: linear;
}

.indeterminateProgressBarDotKeyframeSteps 50%
{
opacity: 1.0;
-webkit-transform: translatex(66%);
transform: translatex(66%);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}

.indeterminateProgressBarDotKeyframeSteps 62.5%
{
opacity: 1.0;
-webkit-transform: translatex(100%);
transform: translatex(100%);
}

.indeterminateProgressBarDotKeyframeSteps 80%
{
opacity: 0.0;
-webkit-transform: translatex(100%);
transform: translatex(100%);
}

.indeterminateProgressBarDotKeyframeSteps 100%
{
opacity: 0.0;
-webkit-transform: translatex(-10px);
transform: translatex(-10px);
}

@-webkit-keyframes moveProgressDot
{
0%
{
opacity: 1.0;
-webkit-transform: translatex(-10px);
transform: translatex(-10px);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}
12.5%
{
opacity: 1.0;
-webkit-transform: translatex(33%);
transform: translatex(33%);
-webkit-animation-timing-function: linear;
animation-timing-function: linear;
}
50%
{
opacity: 1.0;
-webkit-transform: translatex(66%);
transform: translatex(66%);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
62.5%
{
opacity: 1.0;
-webkit-transform: translatex(100%);
transform: translatex(100%);
}
80%
{
opacity: 0.0;
-webkit-transform: translatex(100%);
transform: translatex(100%);
}
100%
{
opacity: 0.0;
-webkit-transform: translatex(-10px);
transform: translatex(-10px);
}
}

@keyframes moveProgressDot
{
0%
{
opacity: 1.0;
-webkit-transform: translatex(-10px);
transform: translatex(-10px);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}
12.5%
{
opacity: 1.0;
-webkit-transform: translatex(33%);
transform: translatex(33%);
-webkit-animation-timing-function: linear;
animation-timing-function: linear;
}
50%
{
opacity: 1.0;
-webkit-transform: translatex(66%);
transform: translatex(66%);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
62.5%
{
opacity: 1.0;
-webkit-transform: translatex(100%);
transform: translatex(100%);
}
80%
{
opacity: 0.0;
-webkit-transform: translatex(100%);
transform: translatex(100%);
}
100%
{
opacity: 0.0;
-webkit-transform: translatex(-10px);
transform: translatex(-10px);
}
}