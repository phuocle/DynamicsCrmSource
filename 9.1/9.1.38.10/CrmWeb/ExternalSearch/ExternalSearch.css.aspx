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
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } %>
}

.useCategorizedSearch
{
color: #0072c5;
font: normal normal normal 13px/20px <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
padding-bottom :2px;
float:left;
<% if (!CrmStyles.IsRightToLeft) { %>
float: right;
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
font: normal normal normal 16px/21px  <%= WebUtility.GetFontResourceForStyle("Suggestion_Flyout_Delete_Label.Font")%>;
color: #000000;
overflow: hidden;
}
.entityName {


overflow: hidden;
}
.attributeOther
{


font-family: "Segoe UI";
font-weight: 400;
font-size: 14px;
color: #444;
line-height: 18px;
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

em
{
font-weight: bold;
}

.panoramaItemMargin
{
width: 800px;
height: 480px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:0px;
<% } else { %>
margin-right:0px;
<% } %>
}

.panoramaItem-contentMargin
{
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
}

.section_controlMargin
{
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
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
<% } else { %>
padding-left:15px;
<% } %>
}

.listItem_section.image_enabled_meqf > div:first-child {
width:48px;
margin-top: 5px;
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


.clearfix:after {
content: "";
display: table;
clear: both;
}




.tipsSectionContainer
{
position: relative;
height: 220px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 10px;
<% } else { %>
float: right;
margin-right: 10px;
<% } %>
width: 65%;
margin-top: 11px;
padding: 20px;
max-width: 596px;
max-height: 220px;
color: #444;
background-color: #f0f0f0;
font-family: Segoe UI;
}

.tipsSectionContent
{
padding-top: 22px;
font-size: 13px;
line-height: 16px;
}

.tipsSectionContent a
{
color: blue;
text-decoration: underline;
}

.tipsSectionScrollRegion
{
overflow-y: auto;
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
}












.meqfmainContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 13px;
left: 0px;
<% } else { %>
left: 13px;
<% } %>
overflow-x: hidden;
overflow-y: hidden;
}


















.meqfformHeader
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:0px !important;
<% } %>
}

button:focus
{
outline-style:dotted !important;
outline-width:thin !important;
}

SELECT.ms-crm-SelectBox
{
height: 30px !important;
}

SELECT.ms-crm-SelectBox:focus {
border: 2px solid #83a2db;
}

SELECT.ms-crm-SelectBox,
SELECT.ms-crm-SelectBox-WorkflowDesigner
{
font-family: "Segoe UI";
font-size: 18px;
font-weight: 300;
color: #444;
}

.meqfTile
{
height: 48px;
width: 48px;
line-height: 46px;
text-align: center;

overflow: hidden;
display: inline-block;
}



.meqfsearchCriteria
{
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
}


.moreRecordsText
{
height:40px;
font-size:14px;
padding-top: 5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:5px;
float:right;
<% } else { %>
padding-right:5px;
float:left;
<% } %>
}

.externalSearchToggle
{
display: inline-block;
vertical-align: middle;
}



.loadingdiv {
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right: 16%;
<% } else { %>
left: 36%;
<% } %>
top: 50%;
}
.loadingdiv {
<% if (CrmStyles.IsRightToLeft) { %>
right: -webkit-calc(16% - 16px);
<% } else { %>
left: -webkit-calc(36% - 16px);
<% } %>
top: -webkit-calc(50% - 16px);
}
.loadingdiv {
<% if (CrmStyles.IsRightToLeft) { %>
right: -moz-calc(16% - 16px);
<% } else { %>
left: -moz-calc(36% - 16px);
<% } %>
top: -moz-calc(50% - 16px);
}
.loadingdiv {
<% if (CrmStyles.IsRightToLeft) { %>
right: calc(16% - 16px);
<% } else { %>
left: calc(36% - 16px);
<% } %>
top: calc(50% - 16px);
}

.externalSearchToggle:hover
{
text-decoration: underline;
}






@media screen and (max-height:600px) and (min-height:500px)
{
.meqfVerticalScroll
{
width: 1000px;


}

.meqfVerticalScroll:hover
{
width: 1000px;


}
}

@media screen and (max-height:500px) and (min-height:320px)
{
.meqfVerticalScroll
{
width: 1000px;


}

.meqfVerticalScroll:hover
{
width: 1000px;


}
}

@media screen and (min-height:600px)
{
.meqfVerticalScroll
{
width: 1000px;


}
.meqfVerticalScroll:hover
{
width: 1000px;


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
border: 2px solid #00869c;
margin-bottom: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-top: 0px;
outline-color: #cd9835;
border-color: #cd9835;
}
.meqfsearchBoxHeader
{
height: 45px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}
.searchbox
{
height: 30px;
max-width: 800px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0;
margin-left: 20px;
<% } else { %>
padding-left: 0;
margin-right: 20px;
<% } %>
}
.meqfformHeader
{
height: 30px !important
}

}

@media screen and (max-height:320px)
{
.meqfVerticalScroll
{
width: 1000px;


}
.meqfVerticalScroll:hover
{
width: 1000px;


}
}

@media screen and (min-width:1070px)
{
.meqfinputContainer
{
width:100%;
overflow-x:hidden;
}
}


<% if(!this.IsVisualRefreshEnabled) { %>

@media screen and (max-width:1170px)
{
.meqfformHeader
{
width: 800px;
}
.meqfsearchBoxHeader
{
overflow-y: hidden;
overflow-x: hidden;
padding-top:0px;
}
.meqfsearchboxiconcontainer
{
overflow-x:hidden;
height:100% !important;
}
}

<% } %>

@media screen and (min-width:1167px) and (max-width:1278px)
{
.meqfsearchboxiconcontainer
{
width: 800px;
}
}

@media screen and (max-width:940px)
{
.meqfformHeader
{
}
.meqfsearchBoxHeader
{
}
.meqfsearchboxiconcontainer
{
width: 800px;
}
.meqfinputContainer
{
padding-top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px !important;
<% } else { %>
margin-left: 0px !important;
<% } %>
overflow-x:hidden;
}
.searchBoxHeader .leftcolumn .filterLabel {
margin-left: 0px;
}
}

@media screen and (max-width:640px)
{
.meqfsearchBoxHeader
{
width: 800px;
}
.meqfinputContainer
{
width:auto;
}
.meqfsearchboxiconcontainer
{
}
.meqfSearchTextBoxWidth
{
width: 770px;
height:30px !important;
border: 2px solid #00869c;
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
height: 30px !important;
font-weight : 600;
width: 30px;
vertical-align:middle;
}
.meqfformHeader
{
}
.startwithrow
{
width: 395px !important
}
}

@media screen and (max-width:425px)
{
.startwithrow
{
width: 295px !important
}
.externalSearchToggle
{
width: 100px;
}
}


.meqfVerticalScrollDevice
{


}




















label {
width: auto;
height: 27px;
position: relative;
top: 0;
font-family: "Segoe UI";
font-size: 12px;
font-weight: 400;
color: #262626;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;

}
.disabled{
pointer-events:none;
opacity:0.4;
}
.dropdownbox_searchboxcontainer
{
padding: 0;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% } else { %>
margin-left: 30px;
<% } %>
margin-top: 30px;
}
.removingpadding_addingmargin
{
padding: 0;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% } else { %>
margin-left: 30px;
<% } %>
}
.facets_searchresultcontainer
{
padding: 0;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% } else { %>
margin-left: 30px;
<% } %>
}
.entityNameFacets
{
width: 117px;
overflow: hidden;
display: inline-block;
text-overflow: ellipsis;
white-space: nowrap;
font-family: "Segoe UI";
font-size: 14px;
line-height: 21px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}
.showmore_lessfacet
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 25px;
<% } else { %>
margin-left: 25px;
<% } %>
font-family: "Segoe UI";
font-size: 12px;
color: #0072C6;
height: 30px;
padding-top: 7px;
padding-left: 2px;
padding-right: 1px;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}
.mainContainer{
right: 0;
left: 0;
}
.allrecords
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
font-weight: 500 !important;
font-size: 12px;
font-family: "Segoe UI";
margin-bottom: 5px;
display: inline-block;
}
.attributeMargins {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 46px;
<% } else { %>
margin-left: 46px;
<% } %>
margin-top: 5px;
}
.listView .listItem_section {
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
overflow: hidden;
margin-bottom: 5px;
<% if (CrmStyles.IsRightToLeft) { %>
<% } else { %>
margin-right: 20px;
<% } %>
}
.includeActivitiesAndNotes
{
width: 7% !important;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 15px !important;
<% } else { %>
margin-right: 15px !important;
<% } %>
height: 17px;
padding-top: 10px;
vertical-align: top;
}
[class*="col-"]
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
[class*="row"]
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 0;
<% } else { %>
margin-right: 0;
<% } %>
}
@media screen and (min-width:991px) and (max-width:3840px)
{
.col-md-6
{
width: 68.2%;
}
}
@media screen and (max-width:992px)
{
.col-md-6
{
width: 0;
}
}

<% if(this.IsVisualRefreshEnabled) { %>

.attributeMargins {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 48px;
<% } else { %>
margin-left: 48px;
<% } %>
}
.section_control_meqf {
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:10px;
<% } else { %>
padding-left:10px;
<% } %>
}
.primaryConductor
{
background-color: #F1F1F1;
overflow: hidden;
}
.megaContainerRelevanceSearch
{
position: relative;
height: 150px;
background-color: white;
}
.megaContainerRelevanceSearchBGColor
{
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
}
.entityDisplayName
{
font: normal normal normal 14px/16px  <%= WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
color: #505050;
}

.attributeOther #attribtwo,
.attributeOther #attribthree,
.attributeOther #attribfour,
.attributeOther #attribfive
{
<% if (Request.Browser.Browser == "Firefox" || Request.Browser.Browser == "IE") { %>
font: normal normal normal 14px/18px  <%= WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
<% } else { %>
font: normal normal normal 14px/16px  <%= WebUtility.GetFontResourceForStyle("Dynamic_Property_Flyout.Font")%>;
max-height: 66px!important;
<% } %>
color: #505050;
}
.attribone{
font: normal normal normal 18px/21px  <%= WebUtility.GetFontResourceForStyle("ProcessSwitcher_ProcessTitle.Font")%>;
color: #505050;
overflow: hidden;
}

.col-md-2.removingdefaultpadding.globalfacets
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 3px;
<% } else { %>
padding-left: 3px;
<% } %>
}
}

#visualRefreshSearchCriteria
{
top: CALC(50% + 32px);
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
<% } else { %>
left:0px;
<% } %>

width: 100%;
display: inline-block;
position: absolute;
text-align: center;
margin-bottom: 0px;
padding-top: 20px;
color: #9B9B9B;
font-size:<%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight: 300;
line-height: 20px;
width: 100%;
}
#emptysearchresult
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right: CALC(50% - 32px);
<% } else { %>
left: CALC(50% - 32px);
<% } %>
top: CALC(50% - 32px);
display:none;
}

.facets_searchresultcontainer
{
padding: 0px 15px 15px 15px !important;
}
.facetsname_RecordOwnerCreatedModified
{
margin-bottom: 0px !important;
padding-top: 0px !important;
}
.searchResult
{
margin-top: 10px !important;
}
.dropdownbox_searchboxcontainer
{

width: calc(100% - 30px);
margin: 0;
padding-top: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 60px;
<% } else { %>
padding-left: 60px;
<% } %>
}
.RootView-searchPage
{
width: 100%;
}
.textbox
{
background-color: white;

width: 313px;
}
.facets_searchresultcontainer
{
background-color: white;
margin-bottom: 30px;
margin-left: 30px !important;
margin-right: 30px !important;
height: calc(100% - 130px);

top: 100px !important;

position: absolute !important;
overflow: auto;
padding: 15px;
}
.searchbox
{
width: 343px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 0;
<% } else { %>
float: right;
margin-right: 0;
<% } %>
}

@media screen and (min-width: 1921px)
{
.facets_searchresultcontainer
{
top: -50px;

height: calc(97.7% - 130px);
margin-left: calc((100% - 1860px)/2) !important;
margin-right: calc((100% - 1860px)/2) !important;
margin-bottom: calc((100% - 1860px)/2) !important;
width: 1860px !important;
}

.megaContainerRelevanceSearch .dropdownbox_searchboxcontainer {
padding-left: calc(2.3% - 30px) !important;
margin-left: calc((100% - 1860px)/2) !important;
margin-right: calc((100% - 1860px)/2) !important;
width: 1860px !important;
}

.dropdownbox_searchboxcontainer
{
width: 97.7%;
}
}

@media screen and (min-width: 501px) and (max-width: 1024px)
{
.megaContainerRelevanceSearch
{
height: 200px;
}
.facets_searchresultcontainer
{
top: -100px;
}
}
@media screen and (max-width: 768px)
{
.dropdownbox_searchboxcontainer
{

width: 500px;
display: block;
padding-top: 20px;
}
.dropdownbox_searchboxcontainer + div
{
display: inline-block;
}
.searchbox
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 0;
<% } else { %>
float:left;
margin-left: 0;
<% } %>
padding-top: 10px;
}
.facets_searchresultcontainer
{

top: 130px !important;
height: calc(100% - 170px);
}
}
@media screen and (max-width: 500px)
{
.megaContainerRelevanceSearch
{
height: 250px;
}
.facets_searchresultcontainer
{
top: -110px;
}
}

#searchDiagolue.ms-crm-VS-Menu
{
margin-top:39px !important;
}

.searchBoxHeader .searchboxiconcontainer.meqfsearchboxiconcontainer input#searchTextBox
{
border-color: #BDC3C7 !important;
}

.meqfSearchButton
{
background-color: white !important;
border: 1px solid #BDC3C7 !important;
}

.meqfSearchTextBoxWidth
{
border: 1px solid #BDC3C7 !important;
outline-color: #BDC3C7 !important;
}

.dropdownbox_searchboxcontainer
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px !important;
padding-right: 45px !important;
<% } else { %>
padding-left: 45px !important;
padding-right: 10px !important;
<% } %>
}

#searchDiagolue li.ms-crm-VS-header-MenuItem
{
height: 28px !important;
margin : 0px;
padding : 0px;
border : 0px;
white-space : nowrap;
background-color: #FFFFFF;
}

#searchDiagolue span.ms-crm-VS-header-MenuItem-Icon
{
height: 28px !important;
line-height: 20px;
width: 24px;
display: inline-block;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right: 0px !important;
padding-right: 1px !important;
<% } else { %>
margin-left: 0px !important;
padding-left: 1px !important;
<% } %>
padding-top: 4px !important;
padding-bottom: 4px !important;
border: none !important;
}

#searchDiagolue img.ms-crm-VS-header-MenuItem-Icon
{
height: 16px;
width: 16px;
margin-left: 3px;
margin-right: 3px;
margin-top: 4px;
margin-bottom: 5px !important;
}

#searchDiagolue span.ms-crm-VS-header-MenuItem-Sep
{
height: 28px !important;
display: inline;
line-height: 22px;
width: 0px;
vertical-align: top;
padding: 0px;
}

#searchDiagolue nobr.ms-crm-VS-header-MenuItem-Title
{
height : 28px;
line-height : 18px;
padding : 4px;
display : inline-block;
vertical-align : top;
overflow : hidden;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left: 1px !important;
<% } else { %>
padding-right: 1px !important;
<% } %>
}

#searchDiagolue span.ms-crm-VS-header-MenuItem-Title.ms-crm-VS-header-MenuItem-Title-Rest
{
width : 100%;
overflow : hidden;
text-overflow : ellipsis;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %> !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%> !important;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin-right: 4px !important;
<% } else { %>
margin-left: 4px !important;
<% } %>
}

.ms-crm-VS-RelevanceSearch-AbsolutePosition
{
position:absolute;
left:0px;
right:0px;
top:0px;
bottom:0px;
}

.loadingdiv
{

<% if (CrmStyles.IsRightToLeft) { %>
right: 50% !important;
<% } else { %>
left: 50% !important;
<% } %>
}

.meqfsearchCriteria
{
z-index:2;
position: absolute;
top: CALC(50% + 32px);
left:45px!important;
padding-right:45px;
text-align:center;
margin-bottom:20px;
padding-top:20px;
color: #9B9B9B;
font-size:<%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight:300;
line-height:20px;
width: CALC(100% - 90px);
}

.ms-crm-VS-Menu
{
padding:0px !important;
}

<% } %>