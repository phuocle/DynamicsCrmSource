<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


BODY
{
overflow: hidden;
<% if (Request.Browser.Browser == "IE")
   { %>
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
<% } %>
}

INPUT
{
width: 100%;
}

INPUT.radio
{
width: 16px;
border: 0px;
cursor: pointer;
}

INPUT.checkbox
{
height: 12px;
width: 16px;
border: 0px;
cursor: pointer;
}

LABEL
{
cursor: pointer;
}

DIV.ms-crm-Dialog-Main
{
height: 100%;
vertical-align: top;
padding-left: 5px;
padding-right: 5px;
padding-bottom: 5px;
padding-top: 5px;
overflow: auto;
border-bottom-style: solid;
border-bottom-width: 1px;

}

.ms-crm-DialogStrict-Main-Container{
width : 100%;
height : 100%;
}

BODY > .ms-crm-DialogStrict-Main-Container {
position : absolute;
}

BODY>* ~ .ms-crm-DialogStrict-Main-Container {
position : relative;
}

DIV.ms-crm-DialogStrict-Main,
DIV.ms-crm-DialogStrict-Main-HeaderLess
{
position: absolute;
bottom: 42px;
vertical-align: top;
overflow: auto;
border-bottom-style: solid;
border-bottom-width: 1px;
width:100%;
}

DIV.ms-crm-DialogStrict-Main
{

top: 65px;
}

DIV.ms-crm-DialogStrict-Main-HeaderLess
{
top: 0px;
}

DIV.ms-crm-DialogStrict-Warning
{
position:absolute;
bottom:5px;
top:5px;
left:10px;
right:10px;
}

TR.ms-crm-ErrorMessage-row
{
vertical-align: middle;
}

TD.override-height-Auto
{
height: auto !important
}




TD.ms-crm-Dialog-Main
{
height: 100%;
vertical-align: top;
border-bottom-style: solid;
border-bottom-width: 1px;
padding: 15px;
}

div.ms-crm-DataField
{
background-color: #ffffff;
height: 115px;
width: 322px;
border-width: 1px;
border-style: solid;
overflow-y: auto;
overflow-x: auto;
}

TD.ms-crm-Dialog-Buttons
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
<% }
   else
   { %>
    text-align: right;
<% } %>
padding: 10px;
height: 32px;
}

DIV.ms-crm-Dialog-Buttons
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
<% }
   else
   { %>
    text-align: right;
<% } %>
padding: 10px;
position: absolute;
left: 0px;
right: 0px;
bottom: 0px;
}

div.ms-crm-Dialog-Header,
TD.ms-crm-Dialog-Header
{
border-bottom-style: solid;
border-bottom-width: 1px;
height: 65px;
vertical-align: top;
padding: 5px;
}

DIV.ms-crm-Dialog-Header
{
top: 0px;
padding-bottom: 5px;
padding-top: 5px;
position: absolute;
width: 97.5%;
padding-left: 1%;
padding-right: 1%;
border-bottom-style: solid;
border-bottom-width: 1px;
}

tr.ms-crm-AboutDialog-Header
{
height: 74px;
}

div.ms-crm-AboutDialog-Info
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:65px;
<% }
   else
   { %>
    padding-right:65px;
<% } %>
padding-top:40px;
}

td.ms-crm-AboutDialog-HeaderLogo
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:20px;
<% }
   else
   { %>
    padding-left:20px;
<% } %>
padding-top:16px;
}

div.ms-crm-AboutDialog-HeaderTitle
{
color:#FFFFFF;
font-size:15px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:10px;
    padding-top: 11px;
<% }
   else
   { %>
    padding-left:2px;
<% } %>
width: 300px;
}


TD.ms-crm-Field-Normal
{
padding-top: 5px;
overflow: hidden;
text-overflow: ellipsis;
}

INPUT.ms-crm-Dialog-ListItemSelect
{
position:absolute;
z-index:-1;
border:none;
width:auto;
hidefocus: true;
}
LI.ms-crm-Dialog-ListHeader
{
width: 100%
border-bottom: 1px solid #aca899;
}
LI.ms-crm-Dialog-ListItem
{
cursor: pointer;
padding: 3px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:0.5em;
<% }
   else
   { %>
    padding-left:0.5em;
<% } %>
margin: 2px;
}

UL.ms-crm-Dialog-List
{
margin: 0px;
list-style: none;
}

DIV.ms-crm-Dialog-List
{
height: 100%;
overflow-y: scroll;
background-color: #FFFFFF;
border: 1px solid #949E9C;
}
DIV.ms-crm-Dialog-List-Layered
{
padding: 6px;
}

DIV.ms-crm-Dialog-ScrollableList
{
height: 100%;
width: 100%;
overflow: auto;
background-color: #FFFFFF;
border: 1px solid #949E9C;
}

DIV.ms-crm-Dialog-ScrollableArea
{
height: 100%;
width: 100%;
overflow: auto;
}

TD.ms-crm-Dialog-Footer
{
height: 30px;
padding: 10px;
border-top-style: solid;
border-top-width: 1px;
}

TD.ms-crm-Dialog-Buttonblock
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

DIV.ms-crm-Dialog-Footer
{
height: 40px;
padding: 0px;
border-top-style: solid;
border-top-width: 1px;
position: absolute;
bottom: 0px;
width: 97.5%;
min-width: 288px;

padding-left: 1%;
padding-right: 1%;
}

DIV.ms-crm-StrictDialog-Header-Desc,
DIV.ms-crm-Dialog-Header-Desc
{
padding-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 5px;
<% }
   else
   { %>
    padding-left: 5px;
<% } %>
}

DIV.ms-crm-StrictDialog-Header-Desc
{
line-height: 16px;
}

DIV.ms-crm-Dialog-Desc
{
padding-top: 4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 6px;
<% }
   else
   { %>
    padding-left: 6px;
<% } %>
}

DIV.ms-crm-TabS,
DIV.ms-crm-Tab
{
padding: 10px;
}


.ms-crm-Dialog-BackgroundEx
{
background-color:#E3EFFF;
}

LI.ms-crm-Dialog-ListItem-ImportMap
{
cursor: pointer;
padding: 3px;
border-bottom: 1px solid #C4DDFF;
height:22px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
max-height:20px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:0.5em;
<% }
   else
   { %>
    padding-left:0.5em;
<% } %>
}

TD.ms-crm-Dialog-Info-Icon
{
padding-left: 0px;
padding-right: 2px;
}

TD.ms-crm-Dialog-Error-Icon
{
padding-left: 12px;
padding-right: 12px;
}

TABLE.ms-crm-Dialog-Error
{
margin-top: 24px;
}

DIV.ms-crm-Dialog-Error-Main
{
vertical-align: top;
padding-bottom: 5px;
overflow: auto;
}

TD.ms-crm-Dialog-Error-Footer
{
height: 30px;
padding-left: 8px;
padding-right: 8px;
padding-bottom: 8px;
}

A.ms-crm-Dialog-Error-Link
{
color:#3366CC;
text-decoration: none;
}

A.ms-crm-Dialog-Error-Link:hover
{
color:#0000FF;
text-decoration: underline;
}

DIV.ms-crm-ProgressBar-fillBar
{
background: -moz-linear-gradient(top, #00ff00 0%, #00cc00 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00ff00), color-stop(100%,#00cc00));
background: -webkit-linear-gradient(top, #00ff00 0%,#00cc00 100%);
background: -ms-linear-gradient(top, #00ff00 0%,#00cc00 100%);
background: linear-gradient(top, #00ff00 0%,#00cc00 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff00', endColorstr='#00cc00', GradientType=0);
}

.ms-crm-float-LeadingEdge
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% }
   else
   { %>
    float:left;
<% } %>
}

TD.checkBoxTd
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:4px;
<% }
   else
   { %>
    padding-left:4px;
<% } %>
}

.ms-crm-ImageLoadingDiv
{
width:100%;
height:100%;
}

.ms-crm-ImagePreviewFrame
{
border:1px solid gray;
width:64px;
height:64px;
}

.ms-crm-ImageSelectOption
{
vertical-align:middle;
}

.ms-crm-ImageSelectionDiv
{
margin-top:10px;
margin-bottom:10px;
}

.ms-crm-ImageUploadLabel
{
padding-left:25px;
padding-right:25px;
color: #444444;
}

.ms-crm-ImageFileInput
{
margin-top:10px;
margin-bottom:10px;
margin-left:25px;
margin-right:25px;
width:300px;
}

.ms-crm-ImageErrorDiv
{
margin-bottom:10px;
background-color:#FEF1EC;
border:1px solid red;
}

.ms-crm-ImageErrorText
{
color:red;
}

.ms-crm-ImageLoadingFrame
{
height:"220px";
width:"100%";
}

.ms-crm-RefreshDialog-Main,
.ms-crm-RefreshDialog-Main-HeaderLess
{
position: absolute;
bottom: 49px;
vertical-align: top;
overflow: auto;
width: 100%;
font-family: Segoe UI,Tahoma,Arial;
}

.ms-crm-RefreshDialog-Main
{
top: 110px;
}

.ms-crm-RefreshDialog-Main-MDD div.ms-crm-FieldLabel-LeftAlign
{
width: 40%;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Edit,
.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Value
.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-EmptyValue
{
width: 53.4%;
float: left;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Value.ms-crm-Inline-EmptyValue
{
width: 50%;

max-height: 150px;

min-height: 16px;
word-wrap: break-word;
position: relative;
padding-right: 5px;
padding-left: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: 23px;
<% }
   else
   { %>
    left: 23px;
<% } %>
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.ms-crm-TextArea-MDD
{
white-space: normal !important;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Value.ms-crm-Inline-EditHintState img.ms-crm-InlineLookupEdit
{
padding :1px 0px;
}

.ms-crm-RefreshDialog-Main-MDD DIV.ms-crm-InlineLookupEdit
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 0px;
<% }
   else
   { %>
    padding-left: 0px;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-WarningIcon,
.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-ErrorArrowIcon,
.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-LockIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 41%;
<% }
   else
   { %>
    padding-left: 41%;
<% } %>
}

.ms-crm-Inline-WarningIcon
{
top: 3px !important;
}

.ms-crm-RefreshDialog-Main-MDD,
.ms-crm-RefreshDialog-Main-HeaderLess
{
top: 56px;
position: absolute;
vertical-align: top;
overflow: auto;
font-family: Segoe UI,Tahoma,Arial;
height: 100%
}


.ms-crm-RefreshDialog-Small-MDD-VerticalScroll {
height: 67%;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{
height: 100%;
}
.ms-crm-RefreshDialog-Main.mobileClient
{
top: 90px;
}

.ms-crm-RefreshDialog-Main-HeaderLess
{
top: 0px;
}

.ms-crm-RefreshDialog-Warning
{
position: absolute;
bottom: 5px;
top: 5px;
right: 30px;
left: 30px;
}

.ms-crm-RefreshDialog-Warning.mobileClient
{
bottom: 20px;
}

.ms-crm-RefreshDialogPage-Warning
{
position: absolute;
top: 0px;
left: 30px;
right: 30px;
width: auto;
height: 96%;
}

.ms-crm-RefreshDialog-Header-Title,
TD.ms-crm-RefreshDialog-Error-Title
{
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
margin-left: 30px;
margin-right: 30px;
}

.ms-crm-RefreshDialog-Header-MDD .ms-crm-RefreshDialog-Header-Title,
.ms-crm-RefreshDialog-Header-MDD TD.ms-crm-RefreshDialog-Error-Title
{
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial;
margin-left: 30px;
margin-right: 30px;
}

.ms-crm-RefreshDialog-Header
{
top: 0px;
position: absolute;
width: 100%;
height: 75px;
padding-top: 10px;
}

.ms-crm-RefreshDialog-Header-MDD
{
top: 0px;
position: absolute;
width: 100%;
height: 36px;
padding-top: 16px;
}

.ms-crm-RefreshDialog-Button
{
height: 24px;
font-family: Segoe UI,Tahoma,Arial;
border: 1px solid #C6C6C6;
background-image: none;
margin-top: 10px;
width: auto !important;
min-width: 80px;
white-space: nowrap;
}



.ms-crm-RefreshDialog-Button:Disabled
{
color: #B1B1B1;
}

.ms-crm-RefreshDialog-Button:focus
{
outline: -webkit-focus-ring-color auto 5px !important;
}

.ms-crm-Alert-Text
{
display: block;
margin-top: 30px;
}

.ms-crm-Alert-Img
{
display: block;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 30px;
    margin-left: 15px;
    float: right;
<% }
   else
   { %>
    margin-left: 30px;
    margin-right: 15px;
    float: left;
<% } %>
}

.ms-crm-Alert-Img img
{
height: 36px;
width: 36px;
}

.ms-crm-Button-Text
{
text-overflow: ellipsis;
overflow: hidden;
}

.ms-crm-RefreshDialog-Header-Desc
{
padding-top: 2px;
font-family: Segoe UI,Tahoma,Arial;
margin-left: 30px;
margin-right: 30px;
}

.ms-crm-RefreshDialog-Main-Container div.ms-crm-RefreshDialog-Header-Desc.ms-crm-Alert-Text
{
overflow: auto;
word-wrap: break-word;
max-height: 230px;
max-width: 440px;
}

.ms-crm-RefreshDialog-Footer
{
position: absolute;
bottom: 0px;
width: 100%;
min-width: 288px;

height: 44px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
<% }
   else
   { %>
    text-align: right;
<% } %>
}

.ms-crm-RefreshDialog-Footer-MDD
{
position: absolute;
bottom: 0px;
height: 44px;
width: 100%;
background-color: #F8F8F8;
border-top-color: #ffffff;


<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 0px;
    padding-left: 16px;
    text-align: left;
<% }
   else
   { %>
    right: 0px;
    padding-right: 16px;
    text-align: right;
<% } %>
}

.ms-crm-RefreshDialogFlipImage
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    filter: FlipH();
    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
    background-color: white;
<% } %>
}


.ms-crm-helpIconHebrew
{
background-color: white;
}

.ms-crm-RefreshDialog-FirstTopButton,
.ms-crm-RefreshDialog-SecondTopButton
{
display: block;
position: absolute;
top: 20px;
width: 16px;
height: 16px;
}

.ms-crm-RefreshDialog-FirstTopButton
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 30px;
<% }
   else
   { %>
    right: 30px;
<% } %>
}

.ms-crm-RefreshDialog-SecondTopButton
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 56px;
<% }
   else
   { %>
    right: 56px;
<% } %>
}

.ms-crm-RefreshDialog-Footer-Left
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    float: right;
    margin-right: 30px;
<% }
   else
   { %>
    text-align: left;
    float: left;
    margin-left: 30px;
<% } %>
}

.ms-crm-RefreshDialog-Footer-Right
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: left;
    float: left;
    margin-left: 30px;
<% }
   else
   { %>
    text-align: right;
    float: right;
    margin-right: 30px;
<% } %>
}



body.ms-crm-MobileRefresh
{
font-family: "Segoe UI", Arial, Sans-Serif;
}

.ms-crm-MobileRefresh .ms-crm-RefreshDialog-Header
{
display: none;
}

.ms-crm-MobileRefresh .ms-crm-RefreshDialog-Main
{
bottom: 0px;
margin-top: -51px;
overflow: hidden;
}

.ms-crm-MobileRefresh .ms-crm-RefreshDialog-Main
{
bottom: 0px;
margin-top: -51px;
overflow: hidden;
}

.ms-crm-MobileRefresh #divWarning
{
padding-top: 0 !important;
margin-top: 0 !important;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 0 !important;
<% }
   else
   { %>
    padding-right: 0 !important;
<% } %>
}

.ms-crm-MobileRefresh .tblFindGridContainer
{
bottom: 0;
margin-bottom: 56px;
}

.mobileRefreshNavigation
{
display: none;
position: absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: -7px;
<% }
   else
   { %>
    left: -7px;
<% } %>
bottom: -22px;
}

.ms-crm-MobileRefresh #multiLookupControls
{
display: none;
}

.ms-crm-MobileRefresh #multiLookupControls .ms-crm-Bold-Header,
.ms-crm-MobileRefresh #multiLookupControls .ms-crm-MultipleLookup-ButtonSection
{
display: none;
}

.ms-crm-MobileRefresh .mobileRefreshNavigation
{
max-width: 432px;
width: 103%;
display: block;
overflow: hidden;
white-space: nowrap;
}

.ms-crm-MobileRefresh .mobileRefreshNavigation table
{
width: 100%;
}

.ms-crm-MobileRefresh .mobileRefreshNavigation td
{
max-width: 198px;
width: 0;
padding:0;
margin:0;
overflow: hidden;
display: none;
}

.ms-crm-MobileRefresh .mobileRefreshNavigation td button
{
width: 99%;
margin: 0 5px;
}


.ms-crm-MobileRefresh .ms-crm-Dialog-Lookup-SearchArea
{
display: none;
}

.ms-crm-MobileRefresh #tblFind
{
display: none;
top: -11px !important;
}

.ms-crm-MobileRefresh #multiLookupControls
{
display: none;
}

.ms-crm-MobileRefresh #tblFind
{
display: none;
}

.ms-crm-MobileRefresh .crmDialogFooter
{
display: none;
}

.ms-crm-MobileRefresh.searchMode .ms-crm-Dialog-Lookup-SearchArea,
.ms-crm-MobileRefresh.searchModeMultiSelect .ms-crm-Dialog-Lookup-SearchArea
{
display: block;
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls
{
display: block;
top: 240px !important;
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls li
{
float:none !important;
clear: both;
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls li img.ms-crm-Lookup-Item
{
display: none;
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls li .ms-crm-LookupItem-Name
{
font-size: 26px;
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
line-height: 29px;
width: 90%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 20px;
<% }
   else
   { %>
    margin-right: 20px;
<% } %>
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls li .ms-crm-LookupItem-Type
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
font-size: 14px;
color: #666666;
margin: -1px 0 0 0;
}

.ms-crm-LookupItem-MobileRefresh-Delete
{
display: none;
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls li .ms-crm-LookupItem-MobileRefresh-Delete
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 4px;
    float: left;
<% }
   else
   { %>
    margin-right: 4px;
    float: right;
<% } %>
margin-top: 7px;
display: block;
width: 16px;
height: 16px;
overflow: hidden;
}

.ms-crm-MobileRefresh DIV.ms-crm-Lookup
{
border: none;
overflow-y: auto;
overflow-x:hidden;
}

.ms-crm-MobileRefresh.searchModeMultiSelect #multiLookupControls li b
{
clear: both;
display: block;
}

.ms-crm-MobileRefresh.resultsMode #tblFind,
.ms-crm-MobileRefresh.resultsModeMultiSelect #tblFind
{
display: block;
}

.ms-crm-MobileRefresh.searchMode td.searchMode
{
display: table-cell;
width: 50%;
}

.ms-crm-MobileRefresh.resultsMode td.resultsMode
{
display: table-cell;
width: 50%;
}

.ms-crm-MobileRefresh.searchModeMultiSelect td.searchModeMultiSelect
{
display: table-cell;
width: 50%;
}

.ms-crm-MobileRefresh.resultsModeMultiSelect td.resultsModeMultiSelect
{
display: table-cell;
width: 50%;
}

.ms-crm-MobileRefresh button
{
background-image: none;
background-color: #e0e0e0;
border: 0;
width: 120px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 12px;
<% }
   else
   { %>
    margin-right: 12px;
<% } %>

height: 29px;
}

.ms-crm-MobileRefresh button:active
{
background-color: #0072c6;
color: white;
}

.ms-crm-MobileRefresh input,
.ms-crm-MobileRefresh INPUT.ms-crm-Dialog-Lookup-QuickFind
{
padding: 2px 0;
border: 1px solid #CCCCCC;
margin: 0px;
font-weight: normal;
color: #000000;
text-decoration: none;
font-size: 14px;
height: 24px;
}

.ms-crm-MobileRefresh select,
.ms-crm-MobileRefresh button,
.ms-crm-MobileRefresh input,
.ms-crm-MobileRefresh span,
.ms-crm-MobileRefresh div
{
font-size: 14px;
font-weight: normal;
margin: 0px;
padding: 0;
}

.ms-crm-MobileRefresh select.ms-crm-SelectBox
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 3px 0 4px 2px;
<% }
   else
   { %>
    padding: 3px 2px 4px 0;
<% } %>
}

.ms-crm-MobileRefresh .Lookup_RenderButton_td
{
display: none;
}

.ms-crm-MobileRefresh .AppQuickFind_Render_td
{
display: none;
}

.ms-crm-MobileRefresh #crmGrid_quickFindContainer td
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    border-left: 1px solid #CCCCCC;
<% }
   else
   { %>
    border-right: 1px solid #CCCCCC;
<% } %>
}

.ms-crm-RefreshDialog-Main.ms-crm-RefreshDialog-Main-Top
{
white-space:pre-line;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-InlineInput.ms-crm-InlineLookupEdit
{
height: auto !important;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 0px;
<% }
   else
   { %>
    padding-left: 0px;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-InlineLookupEdit-Box
{
width: 0px;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-OptionSet-AutoOpen
{
z-index: 2003;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-ImageStrip-frm_required.ms-crm-Inline-RequiredLevel
{
float: none !important;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Chrome
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    direction: rtl;
<% }
   else
   { %>
    direction: ltr;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-ImageStrip-frm_required.ms-crm-Inline-RequiredLevel[alt="Required"] {
display: inline !important;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Value div.ms-crm-Inline-GradientMask
{
height: 0px;
width : 0px;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 0px;
<% }
   else
   { %>
    margin-right: 0px;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD textarea.ms-crm-InlineInput
{
width: 100% !important;
}

.ms-crm-RefreshDialog-Main-MDD table.ms-crm-FormSection
{
border-spacing: 0px 0px !important;
}

.ms-crm-RefreshDialog-Main-MDD td.FormSection_CellPadding
{


border-spacing: 0px 0px;
padding-top: 5px;
padding-bottom: 5px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 0px;
<% }
   else
   { %>
    padding-right: 0px;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD Span#label_headerdescription,
.ms-crm-RefreshDialog-Main-MDD Span#description_id,
.ms-crm-RefreshDialog-Main-MDD #label_DialogDescription,
.ms-crm-RefreshDialog-Main-MDD #lbl_cancelcase,
.ms-crm-RefreshDialog-Main-MDD #lbl_descriptioncancelcase,
.ms-crm-RefreshDialog-Main-MDD #lbl_closedescription
{

margin-top: -40px;
position: absolute;
max-width: 90%;
}

.ms-crm-RefreshDialog-Header-MDD .ms-crm-RefreshDialog-FirstTopButton
{

top: 16px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 16px;
<% }
   else
   { %>
    right: 16px;
<% } %>
}

.ms-crm-RefreshDialog-Header-MDD .ms-crm-RefreshDialog-Header-Title
{
font-size: 30px !important;
}

.ms-crm-RefreshDialog-Footer-MDD .ms-crm-RefreshDialog-Button
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 10px !important;
<% }
   else
   { %>
    margin-left: 10px !important;
<% } %>
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Value
{
box-shadow: 1px 1px 2px #ffffff;
border-width: 1px;
border-style: solid;
}

.ms-crm-RefreshDialog-Main-MDD .ms-crm-Inline-Edit select.ms-crm-SelectBox
{
z-index: 10000;
height: 36px;
}

.ms-crm-div-NotVisible
{
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}

.ms-crm-RefreshDialog-Main-Container .ms-crm-RefreshDialog-Main-MDD
{
position: fixed;
}

.ms-crm-RefreshDialog-Main-Container #lbl_gridtext
{
font-family: Segoe UI;
font-size: 12px;
font-weight: bold;
color: #000000;
line-height:1.5;
}

.ms-crm-RefreshDialog-Main-Container #documentlocations_id_c label
{
font-family: Segoe UI;
font-size: 12px;
font-weight: bold;
color: #000000;
line-height: 1.5;
}

#\{5ea59a5f-394a-4d3e-9dc0-1e4f3f55cfad\} td.FormSection_CellPadding, #\{058d7769-ea58-4142-9f2d-74472c82638d\} td.FormSection_CellPadding
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:0 !important;
<% }
   else
   { %>
    padding-left:0 !important;
<% } %>
}

#\{4a60ef03-fcc9-4ad9-80e9-3a8326826b00\}_Header + table div.ms-crm-FormSection-Container, #\{f0f4436b-5e0d-4a02-958b-68fd8b527086\}_Header + table div.ms-crm-FormSection-Container
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:22px !important;
<% }
   else
   { %>
    padding-right:22px !important;
<% } %>
}