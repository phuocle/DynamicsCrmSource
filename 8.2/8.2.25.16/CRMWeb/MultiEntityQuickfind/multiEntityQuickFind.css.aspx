<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


@font-face {
font-family: 'SegoeUI-Bold';
src: local('Segoe UI Bold'), url("crmfont:segoeui-bold_s_u") format("truetype");
}
@font-face {
font-family: 'SegoeUI-Light';
src: local('Segoe UI Light'), url("crmfont:segoeui-light_s_u") format("truetype");
}
@font-face {
font-family: "SegoeUI-Semilight";
src: local('Segoe UI Semilight'), url("../../../styles/segoeui-semilight.ttf") format("truetype");
}

div:focus
{
outline-style:none !important;
-moz-user-focus : none;
}

div::-moz-focus-inner
{
outline-style:none !important;
}

.meqfStartLabel
{
display: inline-block;
color: #262626;
font: normal normal normal 24px/20px <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color: #000000;
padding-bottom :2px;
}

.useRelevanceSearch
{
color: #0072c5;
font: normal normal normal 13px/20px <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
padding-bottom :2px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
float:left;
<% }else { %>
float:right;
<% } %>
}

.meqfSearchButtonMinimize
{
background-color: #cd9835;
color: #ffffff;
display:inline-block;
border:0px solid;
padding:1px 5px 0px 5px;
margin-left:auto;
margin-right:auto;
height: 21px;
width: 30px;
vertical-align:middle;
}

.meqfSearchComboBoxnew
{
height: 20x;
width: 75px;
line-height:normal;
display: inline-block;
}

.meqfListViewName{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
font: normal normal normal 24px/42px  <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Light.Font")%>, <%= WebUtility.GetFontResourceForStyle("AppGridExportUIProvider.cs.Render.xl24.font_family")%>;
color: #262626;
}
.attributePrimary {
font: normal normal normal 18px/23px  <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color: #262626;
margin-top: -2px;
word-wrap: break-word;
overflow: hidden;
}

.attributeOther
{
font: normal normal normal 14px  <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color: #262626;
max-height: 21px;
}
.listItem:hover
{
<% if (CrmStyles.IsRightToLeft && Request.Browser.Browser == "IE") { %>
margin-left: 21px !important;
<% } %>
<% else if (Request.Browser.Browser == "IE") { %>
margin-right: 21px !important;
<% } %>
}

.listItem
{
position:static !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px !important;;
<% } else { %>
padding-left: 0px !important;;
<% } %>
}

div::-webkit-scrollbar {
width: 17px;
height: 17px
}

.ui-dialog >.flyoutDiv
{
color: #000000;
background-color: #ffffff;
border:1px solid #c6c6c6 !important;
}

#ActivitiesFlyout li
{
width: 171px;
height: 22px;
text-indent: 15px;
padding-top: 6px;
font-size: 12px !important;
}

#MEQFActivitiesFlyout
{
padding-left:0px;
}

.flyoutItemOnMouseOut
{
background-color: #ffffff;
}


.panoramaItemMargin
{
width: 260px;
height: 480px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:0px;
<% } else { %>
margin-right:0px;
<% } %>
}

.panoramaItem-contentMargin
{
width: 310px;
height: 480px;
position:absolute;
}


.meqfListViewNameMargin
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:0px;
padding-right:5px;
padding-left:0px;
<% } else { %>
margin-left:2px;
padding-right:0px;
<% } %>
}

.meqfTabBorder
{
margin-top: 0px !important;
}

.meqfpanoramaItem:first-child
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:0px !important;
<% } else { %>
padding-left:30px !important;
<% } %>
}

.meqfpanoramaitem-title
{
<% if (!CrmStyles.IsRightToLeft) { %>
padding-left:5px !important;
<% } %>
}

.meqfNewRecord
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
margin-right:25px;
<% } else { %>
float:left;
margin-left:25px;
<% } %>
width: 30px !important;
height: 26px !important;
background-repeat: no-repeat !important;
background-color: transparent;
border: 0px;
margin-top:8px ;
}

.listItemMargin
{
height:80px;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}


.listItemMarginDisplay
{
display : block !important;
}

.panoramaItemMarginDisplay
{
padding:0px 20px 20px 20px !important;
}

.section_controlMargin
{
height:67px;
width:46px;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}


.meqfsearchTextMargin
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}

.section_control_meqf {
overflow:hidden;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
margin-right:10px;
<% } else { %>
float: left;
margin-left:10px;
<% } %>
}

.listItem_section.image_enabled_meqf > div:first-child {
height:67px;
width:46px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:0px;
float:right;
<% } else { %>
margin-right:0px;
float:left;
<% } %>
}

.meqfSearchDropDown
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}


.meqffilterCombo
{
width: 100px;
}

::-webkit-scrollbar-thumb
{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #cdcdcd;
}

::-webkit-scrollbar-track
{
background-color: #f0f0f0;
}

::-webkit-scrollbar
{
width:12px;
}

div ::-webkit-scrollbar-button:vertical:decrement
{
background-image: url('/_imgs/arrow_up_default.png');
background-color: #cdcdcd;
background-repeat:no-repeat;
height: 15px;
}
div::-webkit-scrollbar-button:vertical:increment
{
background-image: url('/_imgs/arrow_down_default.png');
background-color: #cdcdcd;
background-repeat:no-repeat;
height: 20px;
}

.meqfpanoramaContainer
{
height: 481px;
overflow: hidden;
position: absolute;
}

.meqfmainContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 13px;
left: 0px;
<% } else { %>
left: 13px;
<% } %>
overflow-x: auto;
overflow-y: hidden;
}

.meqfformHeader
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:0px !important;
<% }
%>
}

button:focus
{
outline-style:dotted !important;
outline-width:thin !important;
}

SELECT.ms-crm-SelectBox
{
width: 10vw !important;
margin-left: 20px;
height: 28px !important;
}

SELECT.ms-crm-SelectBox,
SELECT.ms-crm-SelectBox-WorkflowDesigner
{font-size: 15px;}

.meqfTile
{
height: 46px;
width: 46px;
line-height: 46px;
text-align: center;
padding-top: 2px;
overflow: hidden;
display: inline-block;
}

.meqfsearchCriteria
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
padding-top: 11px;
height:18px;
font: normal normal normal 14px/18px <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color:#666666;
text-align:middle;
}
.searchBoxHeader .leftcolumn .filterLabel
{
color:#262626;
<% if (Request.Browser.Browser == "Chrome") { %>
font: normal small-caps 100 14px <%= WebUtility.GetFontResourceForStyle("Search_FilterWith_Label_Font")%>;
<% } else { %>
font: normal small-caps 100 12px <%= WebUtility.GetFontResourceForStyle("Search_FilterWith_Label_Font")%>;
<% } %>
}

.searchBoxHeader .leftcolumn .searchDropDown
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:25px;
<% } else { %>
margin-left:25px;
<% } %>
position: absolute;
}






@media screen and (max-height:600px) and (min-height:500px)
{
.meqfVerticalScroll
{
width: 310px;
height: 300px;
overflow-y:hidden !important;
}

.meqfVerticalScroll:hover
{
width: 310px;
height: 300px;
overflow-y:auto !important;
}
}

@media screen and (max-height:500px) and (min-height:320px)
{
.meqfVerticalScroll
{
width: 310px;
height: 200px;
overflow-y:hidden !important;
}

.meqfVerticalScroll:hover
{
width: 310px;
height: 200px;
overflow-y:auto !important;
}
}

@media screen and (min-height:600px)
{
.meqfVerticalScroll
{
width: 310px;
height: 440px;
overflow-y:hidden !important;
}
.meqfVerticalScroll:hover
{
width: 310px;
height: 440px;
overflow-y:auto !important;
}
}

@media screen and (min-width:600px)
{
.meqfSearchButton
{
background-color: #cd9835;
color: #ffffff;
display:inline-block;
border:0px solid;
padding:1px 5px 0px 5px;
margin-left:auto;
margin-right:auto;
height: 100%;
width: 30px;
height:30px !important;
vertical-align:middle;
}
.meqfSearchTextBoxWidth
{
width: 770px;
height:30px !important;
border-bottom-width: 1px;
border-top-width: 1px;
margin-bottom: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-top: 0px;
outline-color: #cd9835;
border-color: #cd9835;
}
.meqfsearchBoxHeader
{
height: 90px;
overflow: visible;
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}

.meqfformHeader
{
height: 61px !important
}

}

@media screen and (max-height:320px)
{
.meqfVerticalScroll
{
width: 310px;
height: 75px;
overflow-y: hidden !important;
}
.meqfVerticalScroll:hover
{
width: 310px;
height: 75px;
overflow-y: auto !important;
}
}

@media screen and (min-width:940px)
{
.meqfinputContainer
{
width:100%;
overflow-x:hidden;
}
}

@media screen and (max-width:940px) and (min-width:600px)
{
.meqfinputContainer
{
width:250px;
overflow-x:hidden;
}
}

@media screen and (max-width:600px)
{
.meqfsearchBoxHeader
{
height: 120px;
overflow: visible;
position: absolute;
padding-top:0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}
.meqfinputContainer
{
width:300px;
}
.meqfsearchboxiconcontainer
{
width:300px;
overflow-x:hidden;
height:100% !important;
}
.meqfSearchTextBoxWidth
{
width: 100px;
border-bottom-width: 1px;
border-top-width: 1px;
margin-bottom: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-top: 0px;
outline-color: #cd9835;
border-color: #cd9835;
}
.searchBoxHeader .leftcolumn .searchboxrow  .meqfSearchTextBoxWidth
{
height:21px !important;
}
.meqfSearchButton
{
background-color: #cd9835;
color: #ffffff;
display:inline-block;
border:0px solid;
padding:1px 5px 0px 5px;
margin-left:auto;
margin-right:auto;
height: 21px !important;
font-weight : 600;
width: 30px;
vertical-align:middle;
}
.meqfformHeader
{
height: 91px !important
}

}

.searchBoxHeader .leftcolumn .searchboxrow.enabled
{
margin-top: -35px;
<% if (CrmStyles.IsRightToLeft) { %>
right: 251px;
<% } else { %>
left: 251px;
<% } %>
position: relative;
}


.meqfVerticalScrollDevice
{
overflow-y:auto !important;
-ms-overflow-style:auto;
}
