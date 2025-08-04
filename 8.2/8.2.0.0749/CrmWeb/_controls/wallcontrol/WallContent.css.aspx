<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

div.wall
{
height: 100%;
min-width: 450px;
max-width: 629px;
}

.ie7 div.wall
{
height: auto;
}

div.recordWall
{
height: auto;
min-width: 350px;
overflow: auto;
position: relative;
}

.ie7 div.recordWall
{
overflow-x: hidden;
}

.ie7 .wallElementContainer
{
position: relative;
}


.wall .watermark,
.recordWall .watermark
{
font-size: 12px !important ;
line-height: 19px;
color: #666666 !important;
font-style: italic;
}

.wall h1.title
{
font-family: "Segoe UI Light", "Segoe UI", Arial, Sans-Serif;
font-size: 40px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    padding: 0 2px 0 0;
<% }
   else
   { %>
    float: left;
    padding: 0 0 0 2px;
<% } %>
margin: -15px 0 0 0;
border: 0;
color: #272626;
font-weight: normal;
line-height: 54px;
}

.wall .postArea .tearOffLink img
{
border: 0;
}

.wall .postArea .tearOffLink img.tearOffImage
{
display: block;
}

.highContrast .wall .postArea .tearOffLink img.tearOffImage
{
display: none;
}

.wall .postArea .tearOffLink span.tearOffLabelHighContrast
{
display: none;
}

.highContrast .wall .postArea .tearOffLink span.tearOffLabelHighContrast
{
display: inline;
}

.wall .postArea .tearOffDiv
{
margin-top: 10px;
border: 0;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 4px;
    float: right;
<% }
   else
   { %>
    margin-left: 4px;
    float: left;
<% } %>
}

.safari.mobile .wall .postArea .tearOffDiv
{
margin-top: 8px;
}

.ie7 .wall h1.title
{
line-height: 53px;
}

.wall .header
{
padding: 20px 20px 0 20px;
}

.wall .header .userImageArea
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

.wall .header .userImageArea img
{
height: 105px;
width: 105px;
}

.wall .header .postArea
{
margin: 0;
min-height: 60px;
}

.wall .header .deleteAllDiv,
.wall .header .helpDiv
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
margin: 3px 0 0 0;
height: 20px;
color: #8E8D8D;
}

.wall .header .refreshDiv
{
float: left;
margin: 3px 0 0 0;
height: 20px;
color: #8E8D8D;
}

.wall .header .fetchAllDiv
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
margin: 1px 0 0 3px;
height: 20px;
color: #8E8D8D;
}

.ie7 .wall .header .refreshDiv,
.ie7 .wall .header .deleteAllDiv,
.ie7 .wall .header .helpDiv,
.ie7 .wall .header .fetchAllDiv
{
width: 16px;
}

.ie7.highContrast .wall .header .refreshDiv,
.ie7.highContrast .wall .header .fetchAllDiv
{
float: none;
display: inline;
}

.wall .header .refreshDiv a.refreshPostsLink,
.wall .header .deleteAllDiv a.deleteAllLink,
.wall .header .helpDiv a.helpLink,
.wall .header .fetchAllDiv a.fetchAllLink
{
display:block;
height:13px;
width: 14px;
overflow: hidden;
float:right;
border: 0;
margin-top: 0px;
}

.wall .header .deleteAllDiv a.deleteAllLink,
.wall .header .helpDiv a.helpLink
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 7px;
<% }
   else
   { %>
    margin-right: 7px;
<% } %>
margin-top: 0px;
}

.mobile .wall .header .deleteAllDiv a.deleteAllLink,
.mobile .wall .header .helplDiv a.helpLink
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 14px;
<% }
   else
   { %>
    margin-right: 14px;
<% } %>
}

.highContrast .wall .header .refreshDiv a.refreshPostsLink
{
width: auto;
margin-top: -1px;
height: 16px;
}

.wall .header .refreshDiv a.refreshPostsLink img,
.wall .header .deleteAllDiv a.deleteAllLink img,
.wall .header .helpDiv a.helpLink img,
.wall .header .fetchAllDiv a.fetchAllLink img
{
border: 0;
margin: 0;
padding: 0;
}

.wall .header .refreshDiv a.refreshPostsLink:hover img,
.wall .header .deleteAllDiv a.deleteAllLink:hover img,
.wall .header .helpDiv a.helpLink:hover img,
.wall .header .fetchAllDiv a.fetchAllLink:hover img
{
margin-top: -13px;
}

.flip
{
filter:FlipH();
-webkit-transform:scaleX(-1);
-moz-transform:scaleX(-1);
-o-transform:scaleX(-1);
transform:scaleX(-1);
}

.wall .header .refreshDiv a.refreshPostsLink img.refreshImage
{
border: 0;
display: block;
}

.wall .header .refreshDiv a.refreshPostsLink span.refreshLabel
{
display:none;
}

.highContrast .wall .header .refreshDiv a.refreshPostsLink span.refreshLabel,
.highContrast .wall .header .deleteAllDiv a.deleteAllLink span.deleteLabel,
.highContrast .wall .header .helpDiv a.helpLink span.helpLabel
{
display:inline;
width: auto;
}

.highContrast .recordWall .refreshDiv a.refreshPostsLink img.refreshImage,
.highContrast .wall .refreshDiv a.refreshPostsLink img.refreshImage
{
display:block;
}

.wall .filterAndRefreshContainer
{
margin-top: 8px;
}

.wall .filterAndRefreshContainer .wallActionsContainer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
height: 23px;
}

.wall .filterAndRefreshContainer .wallFilter,
.recordWall .filterAndRefreshContainer .wallFilter
{
height: 17px;
white-space: nowrap;
overflow: hidden;
}

.wall .filters
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-right: -6px;
<% }
   else
   { %>
    float: left;
    margin-left: -6px;
<% } %>
font-size: 12px;
}

.wall .wallFilter.filters
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

.recordWall .wallFilter.filters
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: -6px;
<% }
   else
   { %>
    margin-left: -6px;
<% } %>
margin-bottom: 5px;
}

.wall .filters .filter
{
display: inline-block;
padding: 0 6px;
}

.ie7 .wall .filters .filter
{
display: inline;
zoom: 1;
}

.wall .filters .filter a
{
font-weight: 600;
color: #b1b1b1;
text-decoration:none;
}

.wall .filters .filter.selected a,
.wall .filters .filter.selected a:hover
{
color: #666666;
}

.wall .filters .filter a:hover
{
text-decoration: none;
color: #444444;
}

.highContrast .wall .filters .filter.selected a
{
text-decoration: underline;
}

.recordWall .filterAndRefreshContainer .wallActionsContainer
{
display: none;
}

.recordWall h1.title,
.recordWall .postArea .tearOffLink,
.tornOffPage a.tearOffLink
{
display:none;
}

.recordWall .header
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 2px 0 0 8px;
<% }
   else
   { %>
    padding: 2px 8px 0 0px;
<% } %>
min-height: 50px;
}

.recordWall .header .userImageArea
{
display: none;
}

.recordWall .header .postArea
{
min-height: 30px;
}

.recordWall .header .postArea .headerTop
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
height: 20px;
color: #8E8D8D;
width: 20px;
}

.recordWall .header .postArea .headerTop div
{
display: none;
}

.wall .post,
.recordWall .post
{
padding: 0 0 0 0;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 20px;
    margin-left: 28px;
<% }
   else
   { %>
    margin-left: 28px;
    margin-right: 20px;
<% } %>
margin-bottom: 3px;
clear: both;
line-height: 19px;
}

.recordWall .post
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 19px;
<% }
   else
   { %>
    margin-left: 19px;
<% } %>
}

.wall div.post:hover,
.recordWall div.post:hover,
.wall div.post.focus,
.recordWall div.post.focus,
.mobile .wall div.post:hover,
.mobile .recordWall div.post:hover,
.mobile .wall div.post.focus,
.mobile .recordWall div.post.focus
{
}

.wall .post .wallbody,
.recordWall .post .wallbody
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin: 0 54px 0 0;
<% }
   else
   { %>
    margin: 0 0 0 54px;
<% } %>
min-height: 55px;
}

.wall .post .userThumbnailArea,
.recordWall .post .userThumbnailArea
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
text-align: center;
}

.wall .post .userThumbnail,
.recordWall .post .userThumbnail,
.wall .post .iconThumbnail,
.recordWall .post .iconThumbnail
{
margin-top: 6px;
min-width: 44px;
height: 44px;
border: 1px solid #d1d1d1;
}

.wall .post .iconThumbnail,
.recordWall .post .iconThumbnail
{
background-color: #e7e7e7;
}

.wall .post .userThumbnailArea img,
.recordWall .post .userThumbnailArea img
{
border: none;
cursor: pointer;
height: 44px;
width: 44px;
overflow: hidden;
}

.wall .post .iconThumbnail a img,
.recordWall .post .iconThumbnail a img
{
margin-top: 6px;
border: none;
cursor: pointer;
overflow: hidden;
width: 32px;
height: 32px;
}

.wall .post .userName,
.recordWall .post .userName
{
word-wrap: normal;
overflow: hidden;
text-overflow: ellipsis;
height: 19px;
padding: 3px 0 0 0;
white-space: nowrap;
font-weight: 600;
color: #000000;
}

.wall .post .userName a,
.recordWall .post .userName a
{
text-decoration: none;
font-size: 13px;
font-weight: 600;
}

.wall .post .userName a:hover,
.recordWall .post .userName a:hover
{
text-decoration: underline;
}

.wall .post .footer a
{
text-decoration: none;
color: #000000;
}

.wall .post .footer a:hover
{
text-decoration: underline;
}

.wall .post .text,
.recordWall .post .text
{
display: block;
margin: 0 0 0 0;
max-width: 615px;
overflow: hidden;
color: #000000;
word-wrap: break-word;
}

.wall .post .text a,
.recordWall .post .text a
{
font-weight: normal;
}

.wall .post .text a div,
.recordWall .post .text a div
{
font-weight: normal;
}

.wall .post .footer,
.recordWall .post .footer
{
display: block;
color: #686868;
line-height: 16px;
}

.wall .post .footer .posted,
.recordWall .post .footer .posted
{
color: #666666;
}

.wall .post div.postActions,
.recordWall .post div.postActions
{
margin-top: -18px;
cursor: pointer;
display: none;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:left;
<% }
   else
   { %>
    float:right;
<% } %>
font-size: 11px;
line-height: 18px;
height: 18px;
position: relative;
}

.wall .post .userNameGradientMask,
.recordWall .post .userNameGradientMask
{
display: inline-block;
overflow: hidden;
white-space: nowrap;
word-wrap: normal;
vertical-align: middle;
width: 40px;
z-index: 1;
top: 0;
height: 19px;
margin-top: 1px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 1px;
    float:right;
    background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
    background: -webkit-gradient(linear, right, left, color-stop(rgba(255, 255, 255, 0.15)), color-stop(#ffffff));
    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
    background: -o-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
    background: -ms-linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#26ffffff', endColorstr='#ffffffff', GradientType=1);
    background: linear-gradient(right, rgba(255, 255, 255, 0.15), #ffffff);
<% }
   else
   { %>
    right: 1px;
    float:left;
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
    background: -webkit-gradient(linear, left, right, color-stop(rgba(255, 255, 255, 0.15)), color-stop(#ffffff));
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#26ffffff', endColorstr='#ffffffff', GradientType=1);
    background: linear-gradient(left, rgba(255, 255, 255, 0.15), #ffffff);
<% } %>
background: rgba(255, 255, 255, 0.15);
}

.wall .post div.postActions .postActionsWrapper,
.recordWall .post div.postActions .postActionsWrapper {
background: white;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
height: 19px;
overflow:hidden;
white-space: nowrap;
}

.mobile .wall .post:hover div.postActions,
.mobile .recordWall .post:hover div.postActions
{
display: none;
}

.wall .post:hover div.postActions,
.recordWall .post:hover div.postActions,
.wall .post.focus div.postActions,
.recordWall .post.focus div.postActions,
.mobile .wall .post.focus div.postActions,
.mobile .recordWall .post.focus div.postActions

{
display: block;
color: #545555;
}

.wall .post div.postActions a.textAction,
.recordWall .post div.postActions a.textAction
{
height: 19px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 0 6px 0 7px;
<% }
   else
   { %>
    padding: 0 7px 0 6px;
<% } %>
text-decoration: none;
}

.wall .post div.postActions a,
.recordWall .post div.postActions a
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
position:relative;
margin-right: -1px;
z-index: 0;
}

.wall .post div.postActions a.imageAction,
.recordWall .post div.postActions a.imageAction
{
padding-top: 1px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 6px;
    padding-right: 2px;
    padding-left: 1px;
<% }
   else
   { %>
    margin-left: 6px;
    padding-left: 2px;
    padding-right: 1px;
<% } %>
line-height: normal;
height: 18px;
overflow: hidden;
}

.wall .post div.postActions a.imageAction:hover img,
.recordWall .post div.postActions a.imageAction:hover img
{
margin-top: -16px;
}

.wall .post div.postActions a.hideAction,
.recordWall .post div.postActions a.hideAction
{
display: none !important;
}

.wall .post div.postActions a.lastAction,
.recordWall .post div.postActions a.lastAction
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left: 1px;
<% }
   else
   { %>
    margin-right: 1px;
<% } %>
}

.wall .post div.postActions a:hover,
.recordWall .post div.postActions a:hover
{
z-index: 1;
text-decoration:underline;
}

.wall .post div.postActions a.actionsDropDown,
.recordWall .post div.postActions a.actionsDropDown
{
height: 19px;
width: 21px;
padding: 0;
background: url('/_imgs/WallControl/actionsArrow.png') 0 3px;
}

.wall .post div.postActions div.separator,
.recordWall .post div.postActions div.separator
{
padding: 1px 0;
}

.wall .post div.postActions div.separator:last-child,
.recordWall .post div.postActions div.separator:last-child
{
display: none;
}

.wall .post div.postActions div:hover,
.recordWall .post div.postActions div:hover
{
text-decoration:underline;
}

.wall .floatingimage,
.recordWall .floatingimage
{
display:none;
position:absolute;
top: -307px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    right: -195px;
<% }
   else
   { %>
    left: -195px;
<% } %>
z-index: -1;
filter:alpha(opacity=30)
}



.wall .showMoreLink,
.recordWall .showMoreLink
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 15px;
<% }
   else
   { %>
    padding-right: 15px;
<% } %>
display:block;
cursor: pointer;
clear: both;
}

.wall .showMoreLink img.progress,
.recordWall .showMoreLink img.progress
{
display: none;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
border: 0;
margin: 5px 5px;
}

.rtl .wall .showMoreLink img,
.rtl .recordWall .showMoreLink img
{
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
filter: FlipH;
-ms-filter: "FlipH";
}


.wall .textAndArrow,
.recordWall .textAndArrow
{
}

.wall .showMoreLink .text,
.recordWall .showMoreLink .text
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}

.wall .showMoreLink .arrow,
.recordWall .showMoreLink .arrow
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
    margin-right: 2px;
<% }
   else
   { %>
    float: right;
    margin-left: 2px;
<% } %>
background: url('/_imgs/WallControl/seeMoreArrows.png') 0 0;
width: 10px;
height: 10px;
margin-top: 8px;
margin-bottom: 7px
}

.wall .showMoreLinkProgress img,
.recordWall .showMoreLinkProgress img
{
display: block !important;
}



.wall .progressTemplate,
.recordWall .progressTemplate
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 15px;
<% }
   else
   { %>
    padding-right: 15px;
<% } %>
display:block;
cursor: pointer;
clear: both;
}

.wall .progressTemplate img.progress,
.recordWall .progressTemplate img.progress
{
display: none;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
border: 0;
margin: 5px 5px;
}

.rtl .wall .progressTemplate img,
.rtl .recordWall .progressTemplate img
{
-moz-transform: scaleX(-1);
-o-transform: scaleX(-1);
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
filter: FlipH;
-ms-filter: "FlipH";
}

.wall .progressTemplate .text,
.recordWall .progressTemplate .text
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}

.wall .progressTemplate .arrow,
.recordWall .progressTemplate .arrow
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
    margin-right: 2px;
<% }
   else
   { %>
    float: right;
    margin-left: 2px;
<% } %>
background: url('/_imgs/WallControl/seeMoreArrows.png') 0 0;
width: 10px;
height: 10px;
margin-top: 8px;
margin-bottom: 7px
}

.wall .progressTemplate img,
.recordWall .progressTemplate img
{
display: block !important;
}


.wall .firstRunContent,
.recordWall .firstRunContent
{
display: none;
clear: both;
}

.wall .firstRunContent
{
padding: 0 20px;
}

.wall .firstRunContent .firstRunExperienceContent,
.recordWall .firstRunContent .firstRunExperienceContent
{
clear: both;
display: block;
}

.wall .firstRunContent .emptyFilterResponseContent,
.recordWall .firstRunContent .emptyFilterResponseContent
{
clear: both;
display: none;
}

.wall .firstRunContent .recordWallEmptyResponseContent,
.recordWall .firstRunContent .recordWallEmptyResponseContent
{
clear: both;
display: none;
}


.wall .firstRunContent .firstRunHeader,
.recordWall .firstRunContent .firstRunHeader
{
padding-top: 14px;
}

.wall .firstRunContent .firstRunHeader,
.recordWall .firstRunContent .firstRunHeader
{
font-size: 18px;
color: Black;
}

.wall .firstRunContent .firstRunText,
.recordWall .firstRunContent .firstRunText,
.wall .firstRunContent .firstRunLinks,
.recordWall .firstRunContent .firstRunLinks,
.wall .firstRunContent .noPostsText,
.wall .firstRunContent .returnToDefaultFiltringLink,
.recordWall .firstRunContent .noPostsText,
.recordWall .firstRunContent .returnToDefaultFiltringLink
{
font-size: 13px;
}


.wall .firstRunContent .firstRunText,
.recordWall .firstRunContent .firstRunText
{
color: #7d7d7d;
padding-bottom: 20px;
}

.wall .firstRunContent .noPostsText,
.recordWall .firstRunContent .noPostsText
{
color: #7d7d7d;
padding: 10px 0;
}

.msdyn-followers .record-buttonsection .firstRunText
{
margin-bottom: 20px;
}

.wall .firstRunContent .firstRunLinks,
.recordWall .firstRunContent .firstRunLinks
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

.wall .firstRunLinks ol,
.recordWall .firstRunLinks ol
{
margin-top:10px;
}

.wall .firstRunContent .firstRunLinks li,
.recordWall .firstRunContent .firstRunLinks li
{
margin-top:10px;
}

.wall .firstRunContent .firstRunArrow,
.recordWall .firstRunContent .firstRunArrow
{
padding-top:4px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

.wall .filtersContainer
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-right: 2px;
<% }
   else
   { %>
    float: left;
    margin-left: 2px;
<% } %>
max-width: 230px;
height: 17px;
}

.wall .filtersContainer img
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-right: -34px;
<% }
   else
   { %>
    float: left;
    margin-left: -34px;
<% } %>
padding-top: 4px;
}