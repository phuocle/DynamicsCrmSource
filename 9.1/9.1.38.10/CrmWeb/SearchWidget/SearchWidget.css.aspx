<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

.header
{
padding: 20px 0px 5px 0px;
position: relative;
top: 0px;
}

div.kmwall
{
height: 100%;
width: auto;
overflow: hidden;
}

em
{
color:red
}

.kmwall .clear
{
clear: both;
}

.kmwall .wallContainer
{
clear: both;
position: relative;
top: 0px;
bottom: 0px;
padding: 0 0 0 0;
margin: 0 0 0 0;
height: 100%;
overflow:hidden;
}

.kmwall .wallContainer:hover
{
overflow-y:auto;
}

.kmwall .wallMessageContainer
{
clear: both;
position: relative;
top: 0px;
bottom: 0px;
padding: 0 0 0 0;
margin: 0 0 0 0;
height: auto;
overflow: hidden;
}

.kmwall .errorMessageCause
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Title.Font")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #ff0000;
display:inline;
position: relative;
line-height: 20px;
padding-bottom:2px;
vertical-align: bottom;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-left: 5px;
<% } else { %>
text-align: left;
padding-right: 5px;
<% } %>
}

.kmwall .errorMessageAction
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Title.Font")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #ff0000;
display:inline;
position: relative;
line-height: 18px;
padding-bottom:2px;
vertical-align: bottom;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-left: 5px;
<% } else { %>
text-align: left;
padding-right: 5px;
<% } %>
}

.kmwall .emptyMessage
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Messages.Font")%>;
font-style: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Messages.Italic.font_style")%> !important;
color: #666666;
display:inline;
position: relative;
height: 20px;
font-size: 10px;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}

.NotesV2OnlyText .text
{
color: #9B9B9B;
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight")%>;;
}

.kmwall .emptyMessageSeparator hr
{
color: #D6D6D6;
background-color: #D6D6D6;
height: 1px;
border: 0px;
}

.kmwall .searchPane
{
height: 92px;
}

.kmwall .searchPaneSelect
{
background-color: #e3edf4;
}

.kmwall .searchPaneHover
{
background-color: #f3f3f3;
}

.kmwall .articleRow
{
padding-bottom: 8px;
margin-top: 10px;
margin-left: 0px;
margin-right: 0px;
clear: both;
line-height: 15px;
}

.kmwall .articleRow .articleThumbnailArea
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
text-align: center;
}

.kmwall .articleRow .articleThumbnailArea img
{
border: none;
cursor: pointer;
height: 48px;
width: 48px;
overflow: hidden;
}

.kmwall .articleRow .articleThumbnail, .kmwall .articleRow .iconThumbnail
{
margin-top: 0px;
width: 48px;
height: 48px;
}

.kmwall .articleRow .iconThumbnail
{
height: 48px;
border: 1px solid #d1d1d1;
background-color: #F8F8F8;
}

.kmwall .articleRow .iconThumbnail a img, .kmwall .articleRow .articleThumbnailArea .articleThumbnail .iconThumbnail img
{
margin-top: 10px;
margin-bottom: 10px;
border: none;
cursor: pointer;
overflow: hidden;
width: 24px;
height: 24px;
}

.kmwall .articleRow .wallbody
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
right:46px;
margin: 0 10px 0 0;
<% } else { %>
float: left;
left:46px;
margin: 0 0 0 10px;
<% } %>
height: 92px;
position:absolute;
width: calc(100% - 56px);
width: -webkit-calc(100% - 56px);
width: -moz-calc(100% - 56px);
}

.contentArticleRow
{
height:100%;
}

.answerContentArticleRow
{
height: calc(100% - 48px) !important;
height: -webkit-calc(100% - 48px) !important;
height: -moz-calc(100% - 48px) !important;
position: absolute;
width: 100%;
top: 24px;
margin-top: 17px !important;
}

.kmwall .kmTitle
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Title.Font")%> !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %> !important;
color: #262626 !important;
padding-bottom: 2px;
padding-top: 3px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: calc(100% - 165px) !important;
max-width: -webkit-calc(100% - 165px) !important;
max-width: -moz-calc(100% - 165px) !important;
min-width:100px;
height: auto;
}
.kmTitle-PostContent
{
display: inline-block;
padding-top: 3px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
.kmTitle a
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Title.Font_Family")%> !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %> !important;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%> !important;
color: #262626 !important;
}
.contentkmTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:56px;
<% } else { %>
padding-left:56px;
<% } %>
max-width:90% !important;
height: 22px !important;
padding-top:3px !important;
padding-bottom: 0px !important;
}
.contentkmTitle span
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Title.Font_Family")%> !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %> !important;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%> !important;
color: #262626 !important;
white-space: nowrap !important;
}
.kmwall .articleActions
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
padding-top: 5px;
position: relative;
width: auto;
max-width: 160px;
height: 16px;
text-align: center;
vertical-align: middle;
display : inline;
}

.kmwall .articleActionsReflow
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:15px;
<% } else { %>
padding-right:15px;
<% } %>
padding-bottom: 2px;
margin-top: -6px;
position: relative;
width: 112px;
height: 28px;
text-align: center;
vertical-align: middle;
}

.kmwall .articleActionDefaultView
{
display: block;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
margin-top: -6px;
}

.kmwall .articleActionOverflowView
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
margin-top: -20px;
}

.kmwall .actionSeperator
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
width: 28px;
}

.kmwall .searchBlurb
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #000000;
padding-top: 9px;
word-break: break-word;
white-space: normal;
overflow: hidden;
word-wrap: normal;
width: 100%;
max-height: 30px;
}

.searchBlurb-onReflow
{
width: 100% !important;
}

.kmwall .lastDiv
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Footer.Font")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #666666;
display: inline-block;
height: 17px;
margin-top: 12px;
text-align: center;
vertical-align: top;
}

.kmwall .lastDivImageCell
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.kmwall .lastDivSeparator
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
margin-left: 6px;
margin-right: 6px;
}

.kmwall .lastDivContent
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-left: 6px;
margin-right: 3px;
<% } else { %>
float: left;
margin-left: 3px;
margin-right: 6px;
<% } %>
}

.kmwallFindImage
{
vertical-align: middle;
width:16px;
height:16px;
<% if (CrmStyles.IsRightToLeft) { %>
filter: FlipH();
-webkit-transform: scaleX(-1);
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
transform: scaleX(-1);
<% } %>
}

.kmTitle a:hover
{
text-decoration: underline;
}

.activity-bar-label
{
width: 100%;
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
<%if(CrmStyles.IsRightToLeft) { %>
margin-left: 15px;
<% } else { %>
margin-right: 15px;
<%} %>
}

.activityMoreCommands
{
<%if(CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<%} %>
}

a.activityFiltersDropdown
{
font-weight:600;
color:#666666 !important;
text-decoration: none;
display:block;
}

img.activity-filter-image
{
vertical-align: middle;
outline: none;
<%if(CrmStyles.IsRightToLeft) { %>
padding-left: 20px;
padding-right:15px;
<%}	else { %>
padding-right:20px;
padding-left:15px;
<%} %>
}
.ms-crm-RefreshForm-MoreMenu
{
padding : 0px 0px 0px 3px;
margin:0px;
min-height:25px;
}

#moreActivitiesList
{
border: 1px soid #c6c6c6;
background-color:white;
max-height:300px;
overflow-y:auto;
}
#moreActivitiesList .ms-crm-MenuItem-TextRTL
{
color:#444444;
padding-top:5px;
}
#moreActivitiesList .ms-crm-RefreshForm-MoreMenu
{
padding : 0px 0px 0px 3px;
margin:0px;
min-height:25px;
}
a.activityfilterText
{
text-decoration: none;
outline:none;
}
.kmwall-div-table
{
display:table;
width:100%;
}
.kmwall-div-table-row
{
display: table-row;
}
.kmwall-div-table-filterrow
{
display: block;
}
.kmwall-div-table-column
{
display:table-column;
width:inherit;
}
.kmwall-div-table-cell
{
display:table-cell;
width:33%;
<%if(CrmStyles.IsRightToLeft) { %>
padding-right:6px;
<% } else { %>
padding-left:6px;
<%} %>
}
.kmwall-ArticleFilter
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 0px !important;
<% } else { %>
padding-left: 0px !important;
<%} %>
}
.kmwall-SortFilter-ContentPosition
{
width:auto;
<%if(CrmStyles.IsRightToLeft) { %>
float:left !important;
padding-left: 4px !important;
<% } else { %>
float:right !important;
padding-right: 4px !important;
<%} %>
}
.kmwall-div-table-cell .activity-filter-image
{
<%if(CrmStyles.IsRightToLeft) { %>
float:left !important;
padding-left: 6px !important;
<% } else { %>
float:right !important;
padding-right: 6px !important;
<%} %>
margin-bottom: 3px !important;
}
.kmwall-table-cell
{
height: 100%;
display:table-cell;
}
.kmwall-searchboxdiv
{
width:100%;
overflow: hidden;
}
.kmwall-searchbox
{
position: relative;
height: 100%;
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
}
.emptyFilterSeparator
{
border: 1px solid #f2f2f2;
}
.extraEmptyFilterSeperator
{
border: 1px solid #f2f2f2;
}
.kmwall-div-table-cell .activityMoreCommands
{
width:inherit;
<%if(CrmStyles.IsRightToLeft) { %>
float:left !important;
padding-left: 4px;
<% } else { %>
float:right !important;
padding-right: 4px;
<%} %>
}
.kmwall-SearchResultsMessage
{
position: relative;
height: 100%;
font-size: 10px !important;
font-weight: lighter;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Messages.Font")%> !important;
color: #666666;
}
.kmwall-table-cell-SearchResults-Allignment
{
vertical-align: middle;
}
.kmWallheader
{
position: relative;
top: 0px;
height:100%;
}
.kmWallHeader-TabbedControl
{
height: calc(100% - 23px);
height: -webkit-calc(100% - 23px);
height: -moz-calc(100% - 23px);
padding-top: 18px;
padding-bottom: 5px;
}
.kmwall-SortFilter-ContentPosition .activity-filter-image
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-right: 0px !important;
<% } else { %>
padding-left: 0px !important;
<%} %>
}

.kmwall-div-table-cell-ContentPosition
{
<%if(CrmStyles.IsRightToLeft) { %>
float:left !important;
border-right: 1px solid black;
<% } else { %>
float:right !important;
border-left: 1px solid black;
<%} %>
}

.articleContent
{
word-wrap:break-word;
position:relative;
height:100% !important;
overflow:hidden;
}

.articleTabContainerDiv
{
display: block !important;
}

.articleContentInner
{
width:100% !important;
position:absolute !important;
height:100%;
top:0px;
}

.articleContent iframe
{
width: 100% !important;
}
.articleContentMainDiv
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-left:20px;
<% } else { %>
padding-right:20px;
<%} %>
}
.contentArticleActions
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
position: relative;
width: 112px;
height: 16px;
}
.contentBackbutton
{
height: 16px;
padding-top: 7px;
padding-bottom: 7px;
}

.contentBackbutton .contentArticleActions
{
width: auto;
max-width: 112px;
}

.backimage
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
.contentwallbody
{
height:100%;
overflow :hidden;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
min-height: 55px;
position:absolute;
width:98%
}
.scrollingelement
{
overflow:hidden;
}
.filterdiv
{
margin-bottom: 5px;
margin-top: 5px;
}
.kmwall .showMoreLink
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 15px;
float: left;
<% } else { %>
padding-right: 15px;
float: right;
<% } %>
color: #1160b7;
display:block;
cursor: pointer;
clear: both;
}

.kmwall .showMoreLink img.ms-crm-ImageStrip-articleswall_Progressbar
{
display: none;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
border: 0;
margin: 5px 5px;
}
.rtl .kmwall .showMoreLink img
{
<%= FlipImage("h") %>
}

.kmwall .showMoreLink .text
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>

}

.kmwall .showMoreLink .arrow
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-right: 2px;
<% } else { %>
float: right;
margin-left: 2px;
<% } %>

width: 10px;
height: 10px;
margin-top: 8px;
margin-bottom: 7px
}

.kmwall .showMoreLinkProgress img
{
display: block !important;
}
.kmwall-loading
{
margin-left:50%;
margin-right:50%;
background-color:White;
display:none;
width:32px;
height:32px;
}
.kmwall-loading table
{
width:100%;
height:100%
}
.kmwall-loading td
{
vertical-align: middle;
}
.articleDescription
{
height:81%;
height: calc(100% - 98px);
height: -webkit-calc(100% - 98px);
height: -moz-calc(100% - 98px);
position:relative;
overflow: hidden;
}
.articleDescription:hover,
.articleDescription:focus
{
overflow-y:auto;
}
.contentlastDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:56px;
<% } else { %>
padding-left:56px;
<% } %>
margin-top : 2px !important;
margin-bottom: 15px;
padding-top:5px;
}
.contentDiv
{
height:85%;
height: calc(100% - 70px);
height: -webkit-calc(100% - 70px);
height: -moz-calc(100% - 70px);
}
.showfilterlables
{
display:block;
}
.kmwall-div-table-cell-onResize
{
display: block !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:10px;
<% } else { %>
padding-right:10px;
<% } %>
}
.kmwall-div-textdisplaynone-onResize
{
display: none !important;
}
.kmwall-div-filters-cell-onResize
{
width: 20%;
vertical-align: top;
}
.kmwall-div-display-block
{
display:block !important;
}
.kmwall-div-display-inline
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
display:inline;
width:30%;
max-width:300px;
}
.kmwall-filterby-lable
{
height: 12px !important;
margin-bottom: 10px !important;
margin-top: 5px !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.10px.font_size")%>;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Messages.Font")%> !important;
color: #444444 !important;
}
.kmwall-article-type-lable
{
height: 12px !important;
margin-bottom: 7px !important;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%> !important;
color: #444444 !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size")%> !important;
}
.kmwall-language-type-label,.kmwall-department-type-label
{
padding-top:15px;
margin-bottom: 7px;
font-size: 12px;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%> !important;
color: #444444 !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size")%> !important;
clear:both;
}
.kmwall-filterbox
{
border: 1px solid #CCC;
padding: 0px 0px 0px 0px;
width:inherit;
}
.kmwall-div-table-cell-onResize .activityFiltersDropdown
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
}
.kmwall-div-table-cell-onResize .activity-bar-label
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0.5px !important;
<% } else { %>
margin-left: 0.5px !important;
<% } %>
}
.kmwall-container-articlewall
{
border-left: 1px solid #f2f2f2;
padding-left: 20px;
}
.WatermarkTextBox_Normal, .WatermarkTextBox_Gray
{
width: 100%;
border-color: white;
border-width: 0px;

}
.kmwall-searchbox .WatermarkTextBox_Gray
{
font-style: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Messages.Italic.font_style")%> !important;
font-size: 12px !important;
color: #aaaaaa !important;
font-family: Segoe UI !important;
}
.kmwall-searchbox .WatermarkTextBox_Normal
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Footer.Font")%> !important;
font-size: 12px !important;
color: #000000 !important;
}
.kmwall-searchbox .WatermarkTextBox_Normal:focus,
.kmwall-table-cell a.ms-crm-FindButton:focus
{
outline : 0px;
}
.searchTextBoxBorder{
border: 1px solid #cccccc;
height: 20px;
vertical-align: middle;
line-height: 20px;
padding-bottom: 2px;
width:99%;
}
.sortFilterBorder
{
border-top-width: 1px;
border-bottom-width: 1px;
border-top-style: solid;
border-bottom-style: solid;
border-top-color: #f2f2f2;
border-bottom-color: #f2f2f2;
padding:3px 0px 3px 0px;
border-spacing: 0px 0px;
}
.kmwall-sort-filter
{
padding-bottom: 0px !important;
margin-bottom: 0px !important;
}
.sortFilterBorder-OnReflow
{
border-top: 0px #f2f2f2 !important;
}
.headerPadding
{
padding-top:0px !important;
}
.superScript
{
color:#b96b08;
}
.scrollingTouch
{
overflow-y:auto !important;
}
.filterScroll
{
overflow-y: auto;
display: block;
}
.ms-crm-ImageStrip-searchwidget_articleicon
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -35px -1px;
width: 32px !important;
height: 32px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-SearchWidget_Filters_PublishedPrivateArticles
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -35px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_emaillink
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -55px -73px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_disassociate_article
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -87px -19px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_associate_article_hover
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -69px -1px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_back
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -91px -37px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-SearchWidget_Filters_AllDraftArticles
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -35px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_associate_article
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -55px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_disassociate_article_hover
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -55px -37px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-SearchWidget_Filters_AllApprovedArticles
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -73px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-SearchWidget_Filters_AllPublishedArticles
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -105px -1px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_copylink
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -37px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_copylink_hover
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -69px -19px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_copylink_disabled
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -37px;
width: 16px !important;
height: 16px !important;
cursor: default;
overflow: hidden;
}
.ms-crm-ImageStrip-SearchWidget_Filters_AllArticles
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -105px -19px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_rating
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -89px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_attachment
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -89px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_kbarticle
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -71px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_private_article
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -53px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_email_article_link_hover
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -87px -1px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_popout_article_hover
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -55px -55px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
filter: FlipH();
-webkit-transform: scaleX(-1);
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
transform: scaleX(-1);
<% } %>
}
.ms-crm-ImageStrip-searchwidget_popout
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -53px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
filter: FlipH();
-webkit-transform: scaleX(-1);
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
transform: scaleX(-1);
<% } %>
}
.ms-crm-ImageStrip-SearchWidget_Filters_PublishedPublicArticles
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -35px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_views
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -89px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_public_article
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -53px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}
.ms-crm-ImageStrip-searchwidget_kb_associated_article
{
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -1px;
width: 32px !important;
height: 32px !important;
overflow: hidden;
}

.ms-crm-ImageStrip-searchwidget_emailarticle {
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -71px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}

.ms-crm-ImageStrip-searchwidget_emailarticle_hover {
background: transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -71px;
width: 16px !important;
height: 16px !important;
overflow: hidden;
}

.backStyle
{
vertical-align:middle
}
.kmwall-div-table-cell-onResize .activity-filter-image
{
<% if (CrmStyles.IsRightToLeft) { %>
float:left;
padding-left: 4px !important;
<% } else { %>
float: right;
padding-right: 4px !important;
<% } %>
padding-top: 6px;
clear: both;
}
.kmwall-div-table-cell-onResize.kmwall-dept-filter
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:60px !important;
border-right: 0px #f2f2f2 !important;
<% } else { %>
padding-right:60px !important;
border-left: 0px #f2f2f2 !important;
<% } %>
}
.hideFilter
{
display : none !important;
}
.articleDescriptionTouch
{
overflow:auto !important;
}
.kmwall-typefilter
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:0px;
<% } else { %>
padding-left:0px;
<% } %>
}
.sortFilter
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:0px;
<% } else { %>
padding-left:0px;
<% } %>
}






div.ArticlePopOutCss
{
padding-left:30px !important;
padding-right: 30px !important;
}

.ArticlePopOutCss .ui-dialog-content
{
overflow:hidden !important;
padding-left: 0px !important;
padding-right: 0px !important;
}

.ArticlePopOutCss .ui-dialog-title
{
padding-top:0px !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px !important;
<% } else { %>
padding-right:0px !important;
<% } %>
padding-bottom:0px !important;
line-height:0.5 !important;
color: #262626;
font-size: <%= WebUtility.GetFontResourceForStyle("General.36px.font_size")%>;
font-family:<%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMPopout.Title.Font_Family")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMPopout.Title.Font_Weight")%>;
}

.ArticlePopOutCss .ui-dialog-titlebar
{
padding-top:0px !important;
padding-bottom:0px !important;
margin-top:20px !important;
margin-bottom: 7px !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:0px !important;
<% } else { %>
padding-left: 0px !important;
<% } %>
}

.ArticlePopOutCss .subtitle
{
padding-top:0px !important;
padding-bottom:30px !important;
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size")%>;
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_AppPortal_Fonts") %>, Segoe UI, Arial, Sans-serif;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.100.font_weight")%>;
}

.ArticlePopOutCss .contentArticleActions
{
width: auto !important;
text-align: center;
padding-top: 7px;
padding-bottom: 7px;
margin-bottom: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px !important;
<% } else { %>
padding-right:0px !important;
<% } %>
}

.ArticlePopOutCss .ui-dialog-buttonpane
{
height:40px !important;
margin-top: 20px !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px !important;
<% } else { %>
padding-right:0px !important;
<% } %>
}

.ArticlePopOutCss .ui-button
{
margin-top: 10px !important;
margin-bottom: 0px !important;
height:20px !important;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:0px !important;
<% } else { %>
margin-right:0px !important;
<% } %>
}

.ArticlePopOutCss .ui-dialog-titlebar-close
{
top: 0px !important;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px !important;
<% } else { %>
right:0px !important;
<% } %>
}

.ArticlePopOutCss .contentwallbody
{
width: 100% !important;
}

.ArticlePopOutCss iframe
{
width: 100%;
}
.ArticlePopOutCss .articleDescription
{
height:275px !important;
-webkit-overflow-scrolling: touch !important;
overflow: auto;
}
.hideParatureDependencies
{
display: none;
}
.articleActionreflow
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float: right !important;
<% } else { %>
float: left !important;
<% } %>
}
<% if (this.IsVisualRefreshEnabled) { %>


.filterScroll
{
height: auto !important;
}
.kmwall .articleRow .articleThumbnail
{
height:46px;
width:46px;
}
.kmwall-div-table-cell-onResize
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px;
<% } else { %>
padding-right:0px;
<% } %>
}

#kmwallContainer .emptyMessageContainer
{
position: absolute;
width: 100%;
text-align: center;
top: 40%;
padding-top:0%;
}
.kmTitle a
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %> !important;
line-height:16px;
color: #505050 !important;
}


.searchTextBoxBorder{
height: 28px;
line-height: 28px;
padding-bottom: 0px;
}


.kmwall-div-table
{
padding-left: 15px;
padding-right: 15px;
border-collapse: separate !important;
box-sizing: border-box;
padding-bottom: 10px;
}
.kmWallheader a.activityFiltersDropdown
{
padding-top: 7px;
padding-bottom: 7px;
margin-top:0px;
width:100%;
display:table;
}
.kmWallheader .activityFiltersDropdown span
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%>  !important;
line-height:16px;
display:table-cell;
white-space:nowrap;
}
.kmwall-SearchResultsMessage
{
color: #505050;
line-height:16px;
padding-top:7px;
padding-bottom:7px;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%> !important;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%> !important;
font-weight:normal;
}

.kmWallHeader-TabbedControl
{
padding-top: 20px;
}
.filterdiv
{
margin-top: 0px;
}

.sortFilterBorder
{
padding-top:0px;
border-bottom-color: #ccc;
}
.filterScroll
{
padding-top: 10px;
width:300px;
}
@media only screen and (max-width: 750px) {
.filterScroll
{
width:225px;
}
}

.kmwall-filterby-lable
{
margin-top: 0px !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%>;
line-height:16px;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Title.Font")%> !important;
color: #505050 !important;
}
.kmwall-article-type-lable
{
margin-bottom: 10px !important;
color: #505050 !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size")%> !important;
line-height:16px;
}
.kmwall-container-articlewall
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
<% } else { %>
padding-left:15px;
<% } %>
padding-top: 0px;
border-left: 1px solid #ccc;

}
.kmwall .articleRow
{
padding-bottom:0px;
margin-top:0px
}

.kmwall .articleRow .wallbody
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px;
padding-right:10px;
right:50px;
margin-right:0px;
<% } else { %>
padding-right:0px;
padding-left:10px;
left:50px;
margin-left:0px;
<% } %>
width: calc(100% - 73px);
width: -webkit-calc(100% - 73px);
width: -moz-calc(100% - 73px);
}
.kmwall .searchPane
{
padding-top: 20px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:15px;
<% } else { %>
margin-right:15px;
<% } %>

}

.kmwall .articleRow .iconThumbnail{
height: 44px;
width:44px;
}

.kmwall .kmTitle
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %> !important;
color: #505050 !important;
padding-bottom: 0px;
line-height:16px;
}
.kmwall .searchBlurb
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #505050;
padding-top: 5px;
line-height:16px;
}
.kmwall .lastDiv
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%>;
color: #808080;
margin-top: 5px;
line-height:16px;
}
.articleContentMainDiv
{
<%if(CrmStyles.IsRightToLeft) { %>
padding-left:0px;
<% } else { %>
padding-right:0px;
<%} %>
}
.answerContentArticleRow
{
margin-top: 20px !important;
}

.contentlastDiv
{
margin-top : 0px !important;
margin-bottom:0px;
}

.articleDescription
{
margin-top:7px;
}

#moreActivitiesList  SPAN.ms-crm-Menu-Label {
padding-top:4px;
}

#moreActivitiesList .ms-crm-MenuItem-TextRTL
{
padding-bottom:0px;
padding-top:0px;
}

#moreActivitiesList .ms-crm-RefreshForm-MoreMenu
{
min-height:23px;
padding-bottom:4px;
padding-top:1px;
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%> !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>!important;
color: #505050!important;

}
.kmwall-searchbox .WatermarkTextBox_Normal
{
font-family: <%= WebUtility.GetFontResourceForStyle("KMControl.SearchKMArticles.Searchblurb.Font")%> !important;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>!important;
color: #505050 !important;
line-height:16px;
}
.contentBackbutton
{
<%if(CrmStyles.IsRightToLeft) { %>
margin-left:15px;
<% } else { %>
margin-right:15px;
<%} %>

border-bottom: solid 1px #ccc;
}
.kmwall .actionSeperator
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:10px;
<% } else { %>
padding-left:10px;
<% } %>
width: auto;
}

#kmwallContainer .emptyMessageContainer
{
bottom:50%;
}

div.kmwall
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
<% } else { %>
padding-left:15px;
<% } %>
}
.kmwall-div-table .searchTextBoxBorder .kmwall-table-cell a.ms-crm-FindButton
{
padding-bottom:5px;
}

<% }  %>